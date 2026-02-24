/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumRootToLeaf(root: TreeNode | null): number {
    function getNodeSum(node: TreeNode | null, s: string = ""): number {
        if (node == null) return 0;

        let newS = s;
        newS += node.val;

        if(node.left == null && node.right == null) return parseInt(newS, 2);
        
        return getNodeSum(node.left, newS) + getNodeSum(node.right, newS)
    }

    return getNodeSum(root)
};