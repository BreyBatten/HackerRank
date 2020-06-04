function findMergeNode(headA, headB) {
    let nodeA = headA;
    let nodeB = headB;
    let mergeData = null;

    while (nodeA !== nodeB) {
        if(nodeA.next === null) {
            nodeA = headB;
        } else {
            nodeA = nodeA.next;
        }
        if(nodeB.next === null) {
            nodeB = headA;
        } else {
            nodeB = nodeB.next;
        }
    }
    return nodeA.data;
}
