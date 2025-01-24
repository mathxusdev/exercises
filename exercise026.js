function throttle(f, ms) {
    let timeWhenWasCalled;
    return function() {
        if (timeWhenWasCalled == undefined || Date.now() - timeWhenWasCalled >= ms) {
            timeWhenWasCalled = Date.now();
            f.apply(this, arguments);
        }
    }
}