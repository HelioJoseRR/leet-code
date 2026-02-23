/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy: ListNode = new ListNode(0);
    let aux = 0
    let current = dummy

    let p1 = l1
    let p2 = l2

    while (p1 != null || p2 != null) {
        const val1 = p1?.val ?? 0
        const val2 = p2?.val ?? 0
        
        let sum = val1 + val2 + aux;

        current.next = new ListNode(sum % 10);
        current = current.next
        aux = Math.floor(sum / 10)

        p1 = p1?.next ?? null;
        p2 = p2?.next ?? null;
    }

    if (aux != 0) current.next = new ListNode(aux);

    return dummy.next;
};