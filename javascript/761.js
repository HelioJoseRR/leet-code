/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function(s) {
    if (s == "") return "";

    let eixoY = 0;
    let inicio = 0;
    let res = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '1') eixoY++;
        if (s[i] == '0') eixoY--;

        if (eixoY == 0) {
            let aux = makeLargestSpecial(s.slice(inicio + 1, i));
            res.push("1" + aux + "0");
            inicio = i + 1
        }
    }

    res.sort((a, b) => b.localeCompare(a));
    return res.join("");
};