// Add an iframe.
var e = document.createElement('iframe');
e.style.display = 'none';
e.src = '/fcp/dist/iframe.html';
document.body.appendChild(e);

// Show the page.
var doc = document.documentElement;
doc.className = doc.className.replace(/ ?is-loading/g, '');
