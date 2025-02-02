

const genBtn = document.getElementById('genBtn');
genBtn.addEventListener('click', function() {
	const input = prompt('Enter a number of box per side:')
	changeNumberOfGridSquares(input);
});

function createGridColumn(num) {
	for (let j = 0; j < num; j++) {
		createGridRow(num, j);
	}
}

function createGridRow(num, index) {
	const row = document.createElement('div');
	row.classList.add('row');
	row.classList.add('row-' + index)
	document.getElementById('grid-container').appendChild(row);
	for (let i = 0; i < num; i++) {
		let div = document.createElement('div')
		div.id = 'div-' + uniqueIdentifier;
		// div.style.background = "red";
		div.style.borderStyle = "solid";
		div.style.borderColor = "black";
		div.style.borderWidth = "1px";
		div.onmouseover =  (div) => {
			document.getElementById(div.toElement.id).style.background = "red";
		};
		document.querySelector(`.row-${index}`).appendChild(div);
		uniqueIdentifier++;
	}
}

function changeNumberOfGridSquares(input) {
	const maxGridSquares = 100;
	// numberOfGridSquares = prompt("Enter number boxes per side");
	let numberOfGridSquares =  input;
	if (numberOfGridSquares > maxGridSquares) {
		console.log("limit reached");
		numberOfGridSquares = maxGridSquares;
	}
	
	let grid = document.getElementById("grid-container");
	grid.innerHTML = "";
	createGridColumn(numberOfGridSquares);
}

let numberOfGridSquares =  16;
let uniqueIdentifier = 0;
let gridSquaresButton = document.getElementById('square-grid-button');
// gridSquaresButton.addEventListener("click", changeNumberOfGridSquares);
createGridColumn(16);

