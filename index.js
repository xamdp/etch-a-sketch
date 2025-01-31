
const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
	const div = document.createElement('div');
	div.classList.add('box', 'color-box')
	container.appendChild(div);
}

const boxes = document.querySelectorAll('.color-box');


boxes.forEach(box => {
	box.addEventListener("mouseover", () => {
		const currentColor = box.style.backgroundColor;
		if (currentColor === '') {
			box.style.backgroundColor = 'pink';
		} else if (currentColor  === 'pink'){
			box.style.backgroundColor = 'red';
		} else if (currentColor === 'red') {
			box.style.backgroundColor = 'pink';
		}
	});
});

boxes.forEach(box => {
	box.addEventListener("mouseout", function() {
		const currentColor = box.style.backgroundColor;
		if (currentColor === 'red') {
			box.style.backgroundColor = 'red';
		} else if (currentColor === 'red'){
			box.style.backgroundColor = 'pink';
		}
	});
})

