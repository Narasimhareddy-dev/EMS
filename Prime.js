function prime(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count += 1;
        }
    }
    if (count === 2) {
        return "Prime Number";
    } else {
        return "Not a Prime Number";
    }
}
console.log(prime(7));   
console.log(prime(10));  
console.log(prime(2)); 
console.log(prime(1));   