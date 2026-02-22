/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
        var v1 = l1?.`val` ?: 0
        var v2 = l2?.`val` ?: 0
        val ans = ListNode((v1 + v2) % 10)
        var aux = (v1 + v2) / 10

        var current = ans
        var p1 = l1
        var p2 = l2

        while (p1?.next != null || p2?.next != null) {
            p1 = p1?.next
            p2 = p2?.next
            
            v1 = p1?.`val` ?: 0
            v2 = p2?.`val` ?: 0

            val sum = v1 + v2 + aux
            aux = sum / 10

            current.next = ListNode(sum % 10)
            current = current.next
        }

        if (aux != 0) {
            current.next = ListNode(aux)
        }

        return ans
    }
}