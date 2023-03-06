function f5() {
    var msg =  document.querySelector('div.msg')
    var imagem = document.querySelector('img.imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora > 0 && hora <= 12) {
        msg.innerHTML = `Bom dia! <br> Agora são ${hora} horas`
        imagem.src = 'midia/gutsmanha.png'
        document.body.style.background = '#0c89f0'
    } else if (hora > 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde! <br> Agora são ${hora} horas`
        imagem.src = 'midia/gutstarde.png'
        document.body.style.background = '#927d07'
    } else if (hora > 18 && hora <25) {
        msg.innerHTML = `Boa tarde! <br> Agora são ${hora} horas`
        imagem.src = 'midia/gutsnoite.png'
        document.body.style.background = '#282a30'
    }
}