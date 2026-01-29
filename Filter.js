let numbers = [12, 13, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];


let filtered = numbers.filter(function(num) {
    return num > 15;
});

console.log("Original array:", numbers);
console.log("Filtered array (numbers > 15):", filtered);


let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log("Even numbers:", evenNumbers);
