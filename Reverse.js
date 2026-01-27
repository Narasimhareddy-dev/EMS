function reverse(num) {
    let rev = 0;
    while (num > 0) {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }
    return rev;
}
console.log("Reverse of 1234 is:", reverse(1234));
console.log("Reverse of 5678 is:", reverse(5678));