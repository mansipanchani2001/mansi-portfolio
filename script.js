document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.getElementById('menu');
document.getElementById('menuBtn').addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
