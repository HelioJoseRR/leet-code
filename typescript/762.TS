function countPrimeSetBits(left: number, right: number): number {
    let total = 0;

    for (let i = left; i <= right; i++) {
        let bits = countOneBits(i);
        if (isPrime(bits)) ++total;
    }

    return total;
};

function countOneBits(n: number): number {
  let count = 0;

  while (n !== 0) {
    n &= (n - 1); 
    count++;
  }
  return count;
};

function isPrime(n: number): boolean {
    if(n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i == 0) return false;
    }

    return true;
};