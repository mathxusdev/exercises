function fib(n) {
    if (n == 1 || n == 2) {
        return 1;
    }

    let actual = 1;

    for (let counter = 0, last = 1 ; counter < (n - 2) ; ++counter) {
        actual += last;
        last = actual - last;
    }

    return actual;
}

console.log(fib(77));

//1
//1
//2