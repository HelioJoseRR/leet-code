/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let max = Math.pow(2, k)
    var set = new Set()

    for (let i = 0; i < s.length - k + 1; i++){
        set.add(s.slice(i, i + k))
    }


    return max == set.size
};