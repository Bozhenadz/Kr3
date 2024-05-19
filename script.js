document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.operation-button');
    const resultElement = document.getElementById('res');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const op1 = parseFloat(document.getElementById('op1').value);
            const op2 = parseFloat(document.getElementById('op2').value);
            let result = 'Invalid operation';

            switch (button.dataset.operation) {
                case 'add':
                    result = op1 + op2;
                    break;
                case 'sub':
                    result = op1 - op2;
                    break;
                case 'mul':
                    result = op1 * op2;
                    break;
                case 'div':
                    result = op1 / op2;
                    break;
                case 'log':
                    result = Math.log(op1);
                    break;
                case 'sin':
                    result = Math.sin(op1);
                    break;
                case 'tan':
                    result = Math.tan(op1);
                    break;
            }
            resultElement.textContent = 'Result: ' + result;
        });
    });
});
