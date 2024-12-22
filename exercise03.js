function getWeekDay(date) {
    switch (date.getDay()) {
        case 0:
            console.log('SU');
            break;
        case 1:
            console.log('MO');
            break;
        case 2:
            console.log('TU');
            break;
        case 3:
            console.log('WE');
            break;
        case 4:
            console.log('TH');
            break;
        case 5:
            console.log('FR');
            break;
        case 6:
            console.log('SA');
            break;
    }
}