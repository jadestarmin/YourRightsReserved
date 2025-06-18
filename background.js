let trackerPatterns = [], sitePatterns = {}, adPatterns = {};
const pageDataCount = {}, siteCategoryByTab = {};

// Load resources
Promise.all([
  fetch(chrome.runtime.getURL('trackers.json')).then(r=>r.json()),
  fetch(chrome.runtime.getURL('site_categories.json')).then(r=>r.json()),
  fetch(chrome.runtime.getURL('ad_categories.json')).then(r=>r.json())
]).then(([t, s, a]) => {
  trackerPatterns = t;
  sitePatterns = s;
  adPatterns = a;
  chrome.webRequest.onCompleted.addListener(onTrackerRequest, { urls: trackerPatterns });
});

chrome.tabs.onUpdated.addListener((tabId, info) => {
  if (info.url) {
    pageDataCount[tabId] = 0;
    delete siteCategoryByTab[tabId];
  }
});

function classifySite(host, tabId) {
  if (siteCategoryByTab[tabId]) return siteCategoryByTab[tabId];
  for (const pat in sitePatterns) if (new RegExp(pat).test(host)) return sitePatterns[pat];
  return '기타';
}

function classifyAd(adUnit, host) {
  for (const pat in adPatterns) if (new RegExp(pat).test(adUnit) || new RegExp(pat).test(host)) return adPatterns[pat];
  return '기타 광고';
}

chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.action==='OVERRIDE_SITE_CAT' && sender.tab?.id>=0) siteCategoryByTab[sender.tab.id]=msg.category;
});

function onTrackerRequest(details) {
  const { tabId, type, url, initiator } = details;
  if (tabId<0) return;
  const pageUrl = initiator || details.documentUrl;
  const host = new URL(pageUrl).hostname;
  const siteCat = classifySite(host, tabId);
  const now = new Date().toISOString();

  // 1) Data send events
  if (type==='xmlhttprequest' || type==='beacon') {
    const c = (pageDataCount[tabId]||0) + 1;
    pageDataCount[tabId] = c;
    chrome.tabs.sendMessage(tabId, { action:'PAGE_COUNT', count:c });
    chrome.storage.local.get({ dataLogs: [] }, d => {
      d.dataLogs.push({ time:now, page:host, category:siteCat, tracker:new URL(url).hostname });
      chrome.storage.local.set({ dataLogs:d.dataLogs });
    });
  }
  // 2) Ad creative fetch events
  if (['image','script','sub_frame'].includes(type)) {
    const adUnit = (/iu_parts=([^&]+)/.exec(url)||[])[1]||'';
    const trackerHost = new URL(url).hostname;
    const adCat = classifyAd(adUnit, trackerHost);
    chrome.tabs.sendMessage(tabId, { action:'AD_CATEGORY', category:adCat });
    chrome.storage.local.get({ adLogs: [] }, d => {
      d.adLogs.push({ time:now, page:host, tracker:trackerHost, adCategory:adCat });
      chrome.storage.local.set({ adLogs:d.adLogs }, () => {
        const total = (d.dataLogs?.length||0) + (d.adLogs?.length||0);
        chrome.action.setBadgeText({ text:total.toString() });
        chrome.action.setBadgeBackgroundColor({ color:'#d43f3a' });
      });
    });
  }
}
