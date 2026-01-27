function fact(n) {
    let fact = 1;
    for (let i=1; i<=n; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log("Factorial of 5 is: ", fact(5));
console.log("Factorial of 7 is: ", fact(7));
console.log("Factorial of 10 is: ", fact(10));