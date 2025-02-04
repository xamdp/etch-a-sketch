
const genBtn = document.getElementById('genBtn');
genBtn.addEventListener('click', function() {
	const input = prompt('Enter a number of box per side:');
	generateGridBox(input);
});

function generateGridBox(boxes) {
	const container = document.querySelector('#container');
	container.replaceChildren();
	reachLimit(boxes)
}

function reachLimit(boxes) {
	const LIMIT = 100;
	let numberOfBoxes = boxes;

	if (numberOfBoxes > LIMIT) {
		numberOfBoxes = LIMIT;
		createBoxes(numberOfBoxes);
	}
	createBoxes(numberOfBoxes);
}

let boxID = 0;
function createBoxes (boxesPerSide) {
	for (let i = 0; i < boxesPerSide; i++) {

		const rowOfBoxes = document.createElement('div');
		rowOfBoxes.classList.add('row-box', `row-${i}`);
		document.getElementById('container').appendChild(rowOfBoxes);

		for (j = 0; j < boxesPerSide; j++) {

			let box = document.createElement('div');
			box.id = 'box-' + boxID;
			box.style.border = "1px solid #000";
			document.querySelector(`.row-${i}`).appendChild(box);
			changeColors(box);
			boxID++;
		}
	}
}

function changeColors(box) {
	let eachBox = box;
	eachBox.addEventListener("mouseover", () => {
		const currentColor = box.style.backgroundColor;
		if (currentColor === '') {
			box.style.backgroundColor = 'pink';
		} else if (currentColor  === 'pink'){
			box.style.backgroundColor = 'magenta';
		} else if (currentColor === 'magenta') {
			box.style.backgroundColor = 'red';
		} else if (currentColor === 'red') {
			box.style.backgroundColor = 'orange';
		} else if (currentColor === 'orange') {
			box.style.backgroundColor = '';
		}
	});
}
