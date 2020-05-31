'use strict';

const output = document.querySelector('.ba-editor__output');
const input = document.querySelector('.ba-editor__input');



function setOutputToInput() {
	input.innerHTML = output.innerHTML;
}

function setInputToOutput() {
	output.innerHTML = input.value;
}


window.addEventListener('keydown', (key) => {

	// ctrl + E - edit
	if (key.ctrlKey && key.code == 'KeyE') {
		key.preventDefault();
		console.log('edit');
		if (output.classList.contains('active')) {
			// chow editor - hide output
			input.classList.toggle('active');
			output.classList.toggle('active');

			// content transfer
			setOutputToInput();

		}
	}

	//  ctrl + S - save
	else if (key.ctrlKey && key.code == 'KeyS') {
		key.preventDefault();
		if (input.classList.contains('active')) {

			// show output - hide editor
			input.classList.toggle('active');
			output.classList.toggle('active');

			// content transfer
			setInputToOutput();

		}
	}

	//  esc - discard
	else if (key.code == 'Escape') {
		if (input.classList.contains('active')) {
			input.classList.toggle('active');
			output.classList.toggle('active');
		}
	}
});

