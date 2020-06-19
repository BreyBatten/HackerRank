function removeNthNode(arr, n) {
    let list = [];
    let currNode = head;

    while(currNode.next !== null) {
        list.push(currNode);
        currNode = currNode.next;
    }

    list.push(currNode);

    if(n > list.length) {
        return list[0];
    }
    
    if(list.length - n - 1 >= 0 && list.length - n + 1 < list.length) {
        list[list.length - n - 1].next = list[list.length - n + 1]
        return list[0]
    }
    
    if(list.length - n - 1 < 0) {
        return list.length <= 1 ? [] : list[1]
    }

    if(list.length - n + 1 >= list.length) {
        list[list.length - n - 1].next = null;
        return list[0];
    }
}