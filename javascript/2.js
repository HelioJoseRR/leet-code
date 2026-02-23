/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let p1 = l1;
    let p2 = l2;
    let aux = 0;

    while (p1 != null || p2 != null) {
        let val1 = p1 ? p1.val : 0
        let val2 = p2 ? p2.val : 0
        
        let sum = val1 + val2 + aux;

        current.next = new ListNode(sum % 10);
        current = current.next
        aux = Math.floor(sum / 10)

        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
    }

    if (aux != 0) current.next = new ListNode(aux);

    return dummy.next;
};