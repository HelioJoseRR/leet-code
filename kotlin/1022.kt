/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {

    fun getNodeSum(node: TreeNode?, s: String = ""): Int {
        if (node == null) return 0

        val newS = s + node.`val`

        if (node.left == null && node.right == null) {
            return newS.toInt(2)
        }

        return getNodeSum(node.left, newS) + getNodeSum(node.right, newS)
    }

    fun sumRootToLeaf(root: TreeNode?): Int {
        return getNodeSum(root)
    }
}