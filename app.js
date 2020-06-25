const carBody = document.querySelector('#car-body');
const colorNumber = Math.floor(Math.random() * 3) + 1;
carBody.classList.add(`body-${colorNumber}`);
