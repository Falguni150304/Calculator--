let currentInput = ''; 
let previousInput = '';
let operation = null;
let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;

}



function clearDisplay() {
    display.value = ""
}


function calculate() {
	try {
		if (display.value == ""){
	   display.value = ""	
		}
		else{

			display.value = eval(display.value);
		}
	} catch (e) {
		display.value = 'Error';
	}
}