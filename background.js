// Listen for completed network requests matching Google Ads trackers
const adTrackerPatterns = [
  "*://*.doubleclick.net/*",
  "*://*.googlesyndication.com/*"
];

chrome.webRequest.onCompleted.addListener(async details => {
  const pageUrl = details.initiator || details.documentUrl;
  const ts = new Date().toISOString();
  // Extract ad unit identifier if present
  const match = /iu_parts=([^&]+)/.exec(details.url);
  const adUnit = match ? decodeURIComponent(match[1]) : 'unknown';
  // Simple category mapping placeholder
  const category = adUnit.includes('travel') ? '여행 & 관광' : '미분류';
  const record = { pageUrl, adUnit, category, timestamp: ts };

  // Store record
  chrome.storage.local.get({ logs: [] }, data => {
    const logs = data.logs;
    logs.push(record);
    chrome.storage.local.set({ logs });
  });

  // Notify user
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon48.png',
    title: '광고 호출 감지',
    message: `${new URL(pageUrl).hostname} → ${category} 광고 호출됨`  
  });
}, { urls: adTrackerPatterns });
