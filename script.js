const container = document.querySelector('.container');
const board = document.querySelector('.board');
// const circles = 693;
const circle = document.querySelectorAll('.circle');
const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('.reset');

//colors
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const purple = document.querySelector('.purple');
const red = document.querySelector('.red');
const orange = document.querySelector('.orange');
const pink = document.querySelector('.pink');
const yellow = document.querySelector('.yellow');
const white = document.querySelector('.white');
const black = document.querySelector('.black');

// for (let i = 0; i < circles; i++) {
// 	const circle = document.createElement('div');
// 	circle.classList.add('circle');

// 	board.appendChild(circle);
// }

// events
circle.forEach(function clickFill(cir) {
	cir.addEventListener('click', changeColor);
});

blue.addEventListener('mousedown', blueClick);
green.addEventListener('click', greenClick);
purple.addEventListener('click', purpleClick);
red.addEventListener('click', redClick);
orange.addEventListener('click', orangeClick);
pink.addEventListener('click', pinkClick);
yellow.addEventListener('click', yellowClick);
white.addEventListener('click', whiteClick);
black.addEventListener('click', blackClick);

resetBtn.addEventListener('click', () => {
	window.location.reload();
});

// functions
function changeColor(e) {
	const element = e.target;
	element.style.backgroundColor = color;
}

function blueClick(e) {
	color = 'blue';
}
function greenClick(e) {
	color = 'green';
}
function purpleClick(e) {
	color = 'purple';
}
function redClick(e) {
	color = 'red';
}
function orangeClick(e) {
	color = 'orange';
}
function pinkClick(e) {
	color = 'pink';
}
function yellowClick(e) {
	color = 'yellow';
}
function whiteClick(e) {
	color = 'white';
}
function blackClick(e) {
	color = 'black';
}
