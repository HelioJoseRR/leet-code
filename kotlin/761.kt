class Solution {
    fun makeLargestSpecial(s: String): String {
        if (s.isEmpty()) return ""

        var eixoY = 0
        var inicio = 0
        var lista = mutableListOf<String>()
        
        for (i in inicio until s.length) {
            if (s[i] == '1') eixoY++
            if (s[i] == '0') eixoY--

            if (eixoY == 0) {
                var aux = makeLargestSpecial(s.substring(inicio + 1, i))
                lista.add("1" + aux + "0")
                inicio = i + 1
            }
        }

        lista.sortDescending()
        return lista.joinToString("")
    }
}