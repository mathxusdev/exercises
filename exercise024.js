function f(x) {
    console.log(x);
}

function delay(func, delay) {
    return function(...args) {
        setTimeout(() => func.apply(this, args), delay);
    }
}