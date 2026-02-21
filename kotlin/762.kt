// Código 1

class Solution {
    fun countPrimeSetBits(left: Int, right: Int): Int {
        var total = 0

        for (i in left until right + 1) {
            val bits = i.countOneBits()
            if (isPrime(bits)) ++total
        }

        return total
    }

    fun isPrime(n: Int): Boolean {
        if (n <= 1) {
            return false
        }
    
        for (i in 2 until Math.sqrt(n.toDouble()).toInt() + 1) {
            if (n % i == 0) {
                return false
            }
        }
    
        return true
    } 
}


// Código 2

class Solution {
    fun countPrimeSetBits(left: Int, right: Int): Int {
        var total = 0

        for (i in left until right + 1) {
            val bits = i.countOneBits()
            if (isPrime(bits)) ++total
        }

        return total
    }

    fun isPrime(n: Int): Boolean {
        if (n <= 1) {
            return false
        }
    
        for (i in 2 until Math.sqrt(n.toDouble()).toInt() + 1) {
            if (n % i == 0) {
                return false
            }
        }
    
        return true
    } 
}

// Código 3

class Solution {
    fun countPrimeSetBits(left: Int, right: Int): Int {
        var total = 0

        for (i in left until right + 1) {
            val bits = i.countOneBits()
            if (isPrime(bits)) ++total
        }

        return total
    }

    fun isPrime(n: Int): Boolean {
        if (n <= 1) {
            return false
        }
    
        for (i in 2 until Math.sqrt(n.toDouble()).toInt() + 1) {
            if (n % i == 0) {
                return false
            }
        }
    
        return true
    } 
}