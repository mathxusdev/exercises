function getDateAgo(date, days) {
    let otherDate = date;
    otherDate.setDate(otherDate.getDate() - days)
    return otherDate.getDate();
}