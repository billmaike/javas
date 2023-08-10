function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')

    if (fano.value == 0 || (fano.value) > ano) {
        alert('ERRO! verifique os dados!')

    } else { var fsex = document.getElementsByName('isex')
    var fsex = document.getElementsByName('isex')
    var idade = ano - (fano.value)
    var gen = ""
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gen = 'Homen'
    
        if (idade <10) {
            img.setAttribute('src', 'img/menino.jpg')
        } else if (idade <21 ) {
            img.setAttribute('src', 'img/rapaz.jpg')
        } else if (idade <50 ) {
            img.setAttribute('src', 'img/adulto.jpg')
        } else {
            img.setAttribute('src', 'img/idoso.jpg')
        }
    } else if (fsex[1].checked) {
        gen = 'Mulher'

        if (idade <10) {
            img.setAttribute('src', 'img/menina.jpg')
        } else if (idade <21 ) {
            img.setAttribute('src', 'img/moca.jpg')
        } else if (idade <50 ) {
            img.setAttribute('src', 'img/adulta.jpg')
        } else {
            img.setAttribute('src', 'img/idosa.jpg')
        }
    } res.innerHTML = 'genero ' + gen + ' com ' + idade + ' anos'
    res.appendChild(img)
    img.style.padding = '5px'
 } 

}
  
