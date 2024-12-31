function sumTo1(n) {
    let s = 0;

    for (n; n > 0; n--) {
        s += n;
    }
    
    return s;
}

function sumTo2(n) {
    if (n == 1) {
        return 1;
    }
    return n + sumTo2(n - 1); 
}

function sumTo3(n) {
    return n / 2 * (1 + n);
}