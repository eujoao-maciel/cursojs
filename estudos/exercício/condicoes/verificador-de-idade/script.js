
function click1() {
    var data = new Date()
    var ano = data.getFullYear()
    var ttxano = document.getElementById('nascimento')
    var anoDenascimento = Number(ttxano.value)
    var res = document.querySelector('div.res')

    if (anoDenascimento == 0 || anoDenascimento > ano) {
        window.alert('[ERRO] Verifique seus dados e tente novamente')
    } else {
        var idade = ano - anoDenascimento
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero ='Homem'
            if (idade < 14) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                imagem.setAttribute('src','midia/kiddog.png')
            } else if (idade > 14 & idade < 55) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                imagem.setAttribute('src', 'midia/youngdog.png')
            } else {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                imagem.setAttribute('src', 'midia/olddog.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 14) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                imagem.setAttribute('src', 'midia/kidcat.jpg')
            } else if (idade < 55) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                imagem.setAttribute('src', 'midia/youngcat.jpg')
            }else {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                imagem.setAttribute('src', 'midia/oldcat.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.appendChild(imagem)
        }
}