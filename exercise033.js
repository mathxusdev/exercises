let dictionary = Object.create(null);

Object.defineProperty(dictionary, "toString", {
    value: function() {
        return Object.keys(dictionary).join(', ');
    },
});