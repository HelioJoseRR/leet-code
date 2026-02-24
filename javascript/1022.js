/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    function getNodeSum(node, s = "") {
        if (node == null) return 0

        let newS = s
        newS += node.val

        if (node.left == null && node.right == null) return parseInt(newS, 2);

        return getNodeSum(node.left, newS) + getNodeSum(node.right, newS)
    }

    return getNodeSum(root)
};