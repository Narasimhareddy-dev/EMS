let numbers = [12, 13, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Even numbers count:", evenCount);
console.log("Odd numbers count:", oddCount);
