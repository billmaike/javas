function contar() {
    var ini = document.getElementById('in')
    var fimm = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.getElementById('q4')
    
    if (fimm.value < 1 || ini.value < 1 || passo.value < 1) { alert('ERRO! preencha todos os campos')}

    else {
        var n = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        if (f > n) {

        for (c = n; c <= f; c += p) {
           res.innerHTML += ( c +' ')
        } }
        else {
            for (c = n; c >= f; c -= p) {
                res.innerHTML += ( c +' ')
             }
        }
    } 

    } 

 
