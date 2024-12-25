let user = {
    name: "John Smith",
    age: 35
};

user = JSON.stringify(user);

let other = JSON.parse(user);