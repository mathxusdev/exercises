function formatDate(date) {
    let now = new Date();
    let diff = now - date;
    if (diff < 1000) {
        return 'right now';
    } else if (diff < 60 * 1000) {
        return `${Math.round((diff / 1000))} sec. ago`;
    } else if (diff < 60 * 60 * 1000) {
        return `${Math.round((diff / 60000))} min. ago`;
    } else {
        let arr = [
            '0' + date.getDate(),
            '0' + (date.getMonth() + 1),
            '' + date.getFullYear(),
            '0' + date.getHours(),
            '0' + date.getMinutes(),
        ]

        arr = arr.map(component => component.slice(-2));
        return `${arr.slice(0, 3).join('.')} ${arr.slice(3).join(':')}`;

    }
}