class Solution {
    fun countBinarySubstrings(s: String): Int {
        var atual = 1
        var anterior = 0
        var resposta = 0

        for (i in 0 until s.length - 1) {

            if (s[i] == s[i + 1]){
                ++atual
            } else {
               resposta += minOf(atual, anterior)
               anterior = atual
               atual = 1
            }
        }

        resposta += minOf(atual, anterior)

        return resposta
    }
}
