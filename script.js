function carregar() {
    var msg = document.getElementById('msg')
    var msgFinal = document.getElementById('msgfinal')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = "fotomanha.png"
        document.body.style.background = '#e0a87a'
        msgFinal.innerHTML = 'Tenha um bom dia!'
    } else if (hora > 12 && hora <= 18) {
        //BOA TARDE
        img.src = "fototarde.png"
        document.body.style.background = '#ff7944'
        msgFinal.innerHTML = 'Tenha uma boa tarde!'
    } else {
        //BOA NOITE
        img.src = "fotonoite.png"
        document.body.style.background = '#18181b'
        msgFinal.innerHTML = 'Tenha uma boa noite!'
    }
}