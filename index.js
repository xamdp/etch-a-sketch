
const genBtn = document.getElementById('genBtn');
genBtn.addEventListener('click', function() {
	const input = prompt('Enter a number of box per side:')
	generateGridBox(input);
});

/*generate the grix-box*/
function generateGridBox(boxes) {
	const totalBoxes = (boxes * boxes); 
	const containerHasChild = document.querySelector('.container').hasChildNodes();
	if (containerHasChild) {
		const parent =  document.querySelector('.container');
		parent.replaceChildren();
		createBox(totalBoxes);
	} else {
		createBox(totalBoxes);
	}
}

/*creates the actual boxes*/
function createBox (totalBoxes) {
	const container = document.querySelector('.container');
	for (let i = 0; i < totalBoxes; i++) {
		const div = document.createElement('div');
		div.classList.add('box', 'color-box')
		container.appendChild(div);
	}

	const boxes = document.querySelectorAll('.color-box')
	boxes.forEach((box) => {
		box.addEventListener("mouseover", () => {
			const currentColor = box.style.backgroundColor;
			if (currentColor === '') {
				box.style.backgroundColor = 'pink';
			} else if (currentColor  === 'pink'){
				box.style.backgroundColor = 'red';
			} else if (currentColor === 'red') {
				box.style.backgroundColor = 'pink';
			}
		})
	})

	boxes.forEach((box) => {
		box.addEventListener("mouseout", () => {
			const currentColor = box.style.backgroundColor;
			if (currentColor === 'red') {
				box.style.backgroundColor = 'red';
			} else if (currentColor  === 'red'){
				box.style.backgroundColor = 'pink';
			}
		})
	})
}
