var tempo = new Date() 
var hora = tempo.getHours()
var minuto = tempo.getMinutes()
var diaSem = tempo.getDay()

switch(diaSem) {
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda-Feira')
        break
    case 2:
        console.log('Hoje é Terça-Feira')
        break
    case 3:
        console.log('Hoje é Quarta-Feira')
        break
    case 4:
        console.log('Hoje é Quinta-Feira')
        break
    case 5:
        console.log('Hoje é Sexta-Feira')
        break
    case 6:
        console.log('Hoje é Sábado')
        break
    default:
        console.log('[Erro] Dia Inválido')
        break // este é o único break que não é obrigatório
}

console.log('Agora são ' + hora + ' horas e ' + minuto + ' minutos')
if (hora >= 18) {
    console.log('boa noite')
}
else if (hora >= 12) {
    console.log('boa tarde')
}
else if (hora >= 5) {
    console.log('bom dia')
}
else {
    console.log('boa noite')
}
