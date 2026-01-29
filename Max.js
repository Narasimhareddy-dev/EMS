let numbers = [23,98,45,67,12,89,34,76,54,32];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("Maximum number in array is:", max);
