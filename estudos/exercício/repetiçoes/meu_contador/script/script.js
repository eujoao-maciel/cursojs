
function contar () {
    var textinicio = document.getElementById('inicio')
    var textfim = document.getElementById("fim")
    var textpasso = document.getElementById('passo')
    var res = document.getElementById('res')

    if (textinicio.value.length == 0|| textfim.value.length == 0) {
        window.alert('[ERROR] Verifique seus dados e tente novamente')
    } else {
        res.innerHTML = ""
        var i = Number(textinicio.value)
        var f = Number(textfim.value)
        var p = Number(textpasso.value)
        if (passo <= 0) {
            window.alert("[ERROR] Numero de passos invalidos. Considerando PASSO 1")
            p = 1
        }
        if (i > f) {
          for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c}`
          } 
        } else {
          for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c}...`
          }
        }
    }
}