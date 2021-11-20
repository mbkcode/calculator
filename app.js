// Functions for operations
function add(a, b) {
	return a + b;
}

function substract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

//function to evaluate operator and call for operation
function operate(operator, a, b) {
	a = Number(a);
	b = Number(b);
	switch (operator) {
		case "+":
			return add(a, b);
		case "−":
			return substract(a, b);
		case "×":
			return multiply(a, b);
		case "÷":
			if (b === 0) return null;
			else return divide(a, b);
		default:
			return null;
	}
}
