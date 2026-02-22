function binaryGap(n: number): number {
    let num = n;
    let best = 0;
    let count = -1;

    while (num != 0) {
        if ((num & 1) == 1) {
            if (count > best) {
                best = count;
            }

            count = 1;
        } else {
            if (count != -1) ++count;
        }

        num = num >>> 1
    }

    return best
};