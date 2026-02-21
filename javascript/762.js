/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

function isPrime(n) {
    if(n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i == 0) return false;
    }

    return true;
}
var countPrimeSetBits = function(left, right) {
    let total = 0;

    for (let i = left; i <= right; i++) {
        let bits = ((i >>> 0).toString(2).match(/1/g) || []).length;
        if (isPrime(bits)) ++total;
    }

    return total;
};