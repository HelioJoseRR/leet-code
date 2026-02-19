/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let atual = 1;
    let anterior = 0;
    let total = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == s[i + 1]) {
            ++atual;
        } else {
            total += Math.min(atual, anterior);
            anterior = atual;
            atual = 1;
        }
    }

    total += Math.min(atual, anterior);
    
    return total;
};