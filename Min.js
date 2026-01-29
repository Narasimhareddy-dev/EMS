let numbers = [23,98,45,67,12,89,34,76,54,32];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("Minimum number in array is:", min);
