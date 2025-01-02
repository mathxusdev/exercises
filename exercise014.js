function printList(list) {
    let tmp = list;
    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

function printList2(list) {
    console.log(list.value);
    return list.next != null ? printList2(list.next) : null;
}