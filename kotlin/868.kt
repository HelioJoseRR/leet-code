class Solution {
    fun binaryGap(n: Int): Int {
        if (n.countOneBits() == 0) return 0

        var bestDistance = 0
        var num = n
        var count = -1

        while (num != 0) {
            if (num.isLastBitSet()) {
                if (count > bestDistance) {
                    bestDistance = count
                }

                count = 1
            } else {
                if (count != -1) count += 1
            }

            num = num shr 1
        }

        return bestDistance
    }


    fun Int.isLastBitSet(): Boolean {
        return (this and 1) == 1
    }
}
