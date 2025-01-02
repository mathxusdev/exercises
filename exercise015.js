function printList(list) {
    let tmp = list;
    let arr = [];

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    arr = arr.reverse()
    
    for (item of arr) {
        console.log(item);
    }
}

function printList2(list) { 
    if (list.next) {
      printList2(list.next);
    }

    console.log(list.value);
}