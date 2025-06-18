document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.getElementById('logTable');
  chrome.storage.local.get({ logs: [] }, data => { 
    const recent = data.logs.slice(-10).reverse();
    recent.forEach(rec => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${new Date(rec.timestamp).toLocaleTimeString()}</td>
        <td>${new URL(rec.pageUrl).hostname}</td>
        <td>${rec.category}</td>
      `;
      tbody.appendChild(tr);
    });
  });
});