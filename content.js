(function(){
  const kw=document.querySelector('meta[name=keywords]')?.content||'';
  const desc=document.querySelector('meta[name=description]')?.content||'';
  const txt=(kw+' '+desc).toLowerCase();
  let c;
  if (/travel|tour/.test(txt)) c='여행 & 관광';
  else if (/shop|store|mall/.test(txt)) c='쇼핑';
  else if (/news|article/.test(txt)) c='뉴스';
  else if (/video|movie/.test(txt)) c='동영상';
  if (c) chrome.runtime.sendMessage({ action:'OVERRIDE_SITE_CAT', category:c });
})();

chrome.runtime.onMessage.addListener(msg => {
  if (msg.action==='PAGE_COUNT') showToast(`${msg.count}건의 정보가 전송되었습니다`);
  if (msg.action==='AD_CATEGORY') showToast(`광고 카테고리: ${msg.category}`);
});

function showToast(txt) {
  let t = document.getElementById('yrt-toast');
  if (t) { clearTimeout(t._timeout); t.textContent = txt; }
  else {
    t = document.createElement('div'); t.id='yrt-toast'; t.textContent=txt;
    Object.assign(t.style,{position:'fixed',top:'10px',right:'10px',background:'rgba(0,0,0,0.7)',color:'#fff',padding:'10px 15px',borderRadius:'5px',zIndex:999999,fontSize:'14px',boxShadow:'0 2px 6px rgba(0,0,0,0.3)'});
    document.body.appendChild(t);
  }
  t._timeout = setTimeout(()=>t.remove(),3000);
}