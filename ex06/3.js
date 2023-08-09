var agora = new Date()
var hora = agora.getHours()
console.log('sao ' + hora + ' horas')
if (hora < 18) {
    console.log('boa tarde')}
    else if (hora < 2) {
        console.log('boa noite')
    }
    else if (hora < 12) {
        console.log('bom dia')
    }
