
const now = new Date();
const hour = now.getHours();
const dia = document.getElementById('dia');
const tarde = document.getElementById('tarde');
const noite = document.getElementById('noite');
const p = document.querySelector('p');
const body = document.querySelector('body');
const h1 = document.getElementById('h1');
const span = document.getElementById('span');
span.textContent = hour;

if(hour >= 6 && hour < 12){
    dia.style.display = 'block';
    p.textContent = 'Good Morning!';
    body.style.backgroundColor = '#DBBD90';
    h1.style.color = 'rgb(44, 43, 43)';
} else if(hour >= 12 && hour < 18){
    tarde.style.display = 'block';
    p.textContent = 'Good Afternoon!';
    body.style.backgroundColor = 'rgb(255, 247, 236)';
    h1.style.color = 'rgb(44, 43, 43)';
} else {
    noite.style.display = 'block';
    p.textContent = 'Good Evening!';
    body.style.backgroundColor = '#30436B';
}
