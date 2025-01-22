function work(a, b) {
    console.log(a + b);
}

function spy(func) {
    wrapper.calls = [];
    
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    return wrapper;
}