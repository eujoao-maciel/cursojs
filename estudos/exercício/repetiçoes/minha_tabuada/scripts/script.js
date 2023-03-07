

function Gerar () {
    var txn = document.getElementById('txnum')
    var tab = document.getElementById('seltab')
    if (txn.value.length == 0) {
        window.alert('[ERROR] Numero inválido')
    } else {
        var n = Number(txn.value)
        var c = 1
        tab.innerHTML = ""
        while (c <= 10) {
           var item = document.createElement('option') 
           item.text = `${n} x ${c} = ${n*c}`
           tab.appendChild(item)
           c++
        }
    }
}