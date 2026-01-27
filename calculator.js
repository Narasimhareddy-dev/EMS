function calculator(a, b, operator) {
    if (operator === '+') {
        return a+b;
    }
    else if (operator === '-') {
        return a-b;
    }
    else if (operator === '*') {
        return a*b;
    }
    else if (operator === '/') {
        return a/b;
    }
}
console.log("Addition: ", calculator(10, 5, '+'));
console.log("Subtraction: ", calculator(10, 5, '-'));
console.log("Multiplication: ", calculator(10, 5, '*'));
console.log("Division: ", calculator(10, 5, '/'));
