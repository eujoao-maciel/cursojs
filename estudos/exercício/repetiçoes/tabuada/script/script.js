function gerar() {
    var txnum = document.getElementById('txnumero')
    var tab = document.getElementById('seltab')

    if (txnum.value.length == 0) {
        window.alert('[ERROR] Digite um numero!')
    } else {
        var n = Number(txnum.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}