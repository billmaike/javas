function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var dat = new Date()
    var hdia = document.getElementById('hdia')
    var hora = dat.getHours()
    //var hora = 22
    
    
    msg.innerHTML = 'agora sao ' + hora + ' horas'

    if (hora >= 2 && hora < 14 ) {
        img.src = 'img/dia.jpg'
        document.body.style.backgroundcolor = '#e2cd9f'
        hdia.innerHTML = 'BOM DIA'
    }
    else if (hora >= 14 && hora <= 19) {
        img.src = 'img/tarde.jpg'
        document.body.style.backgroundColor = '#b9846f'
        hdia.innerHTML = 'BOA TARDE'
    }
    else {
        img.src = 'img/noite.jpg'
        document.body.style.backgroundColor = '#515154'
        hdia.innerHTML = 'BOA NOITE'
    }
}