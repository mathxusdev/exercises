let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 300,
};

function topSalary(salaries) {
    if (Object.keys(salaries) == 0) {
        return null;
    }

    let richestPerson = ['', 0];

    for ([name, money] of Object.entries(salaries)) {
        console.log(name, money);
        if (money >= richestPerson[1]) {
            richestPerson = [name, money];
        }
    }

    console.log(richestPerson);
    return richestPerson;
}

topSalary(salaries);