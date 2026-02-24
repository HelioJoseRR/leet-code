function hasAllCodes(s: string, k: number): boolean {
    let max = Math.pow(2, k)
    let set = new Set<String>()

    for (let i = 0; i < s.length - k + 1; i++){
        set.add(s.slice(i, i + k))
    }

    return max == set.size
};