function largest_of_three(a,b,c) {
    if (a>=b && a>=c) {
        console.log(a, "is the largest number.");
    }
    else if (b>=a && b>=c) {
        console.log(b, "is the largest number.");
    }
    else {
        console.log(c, "is the largest number.");
    }
}
largest_of_three(10, 20, 15);
largest_of_three(30, 25, 5);
largest_of_three(12, 18, 22);   