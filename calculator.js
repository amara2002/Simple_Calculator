let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function appendOperator(operator) {
    if (operator === 'sqrt') {
        currentInput = 'Math.sqrt(' + currentInput + ')';
    } else if (operator === '^') {
        currentInput += '**';
    } else {
        currentInput += ' ' + operator + ' ';
    }
    document.getElementById('display').value = currentInput;
}

function appendDecimal() {
    // Prevent adding multiple decimals to the same number
    if (!currentInput.endsWith('.') && !currentInput.endsWith(' ')) {
        currentInput += '.';
        document.getElementById('display').value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = currentInput;
}

function calculateResult() {
    try {
        let result = eval(currentInput).toString();
        currentInput = result;
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(event.key);
    } else if (event.key === '.') {
        appendDecimal();
    } else if (event.key === '+') {
        appendOperator('+');
    } else if (event.key === '-') {
        appendOperator('-');
    } else if (event.key === '*') {
        appendOperator('*');
    } else if (event.key === '/') {
        appendOperator('/');
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});
