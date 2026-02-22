/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    function isLastBitSet(n) {
        return (n & 1) == 1;
    };

    let count = -1;
    let best = 0;
    let num = n;

    while (num != 0) {
        if (isLastBitSet(num)) {
            if (count > best) {
                best = count;
            }

            count = 1;
        } else {
            if (count != -1) count += 1;
        }

        num = num >>> 1;
    };

    return best;
};