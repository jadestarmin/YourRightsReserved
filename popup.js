document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get({ dataLogs: [], adLogs: [] }, d => {
    const dl = d.dataLogs;
    const al = d.adLogs;
    document.getElementById('dataCount').textContent = dl.length;
    document.getElementById('adCount').textContent = al.length;
    const dataTbody = document.getElementById('dataLog');
    dl.slice(-10).reverse().forEach(r => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${new Date(r.time).toLocaleTimeString()}</td><td>${r.page}</td><td>${r.category}</td><td>${r.tracker}</td>`;
      dataTbody.appendChild(tr);
    });
    const adTbody = document.getElementById('adLog');
    al.slice(-10).reverse().forEach(r => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${new Date(r.time).toLocaleTimeString()}</td><td>${r.page}</td><td>${r.tracker}</td><td>${r.adCategory}</td>`;
      adTbody.appendChild(tr);
    });
    const total = dl.length + al.length;
    chrome.action.setBadgeText({ text: total.toString() });
  });
});