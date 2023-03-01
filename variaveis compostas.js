var num = [5, 6, 9]
console.log(num)
console.log(num[2])
num[3] = 2
console.log(num)
num.push(8) // inserir
console.log(num)
console.log(num.length) // tamanho
num.sort() // ordenar
console.log(num)
console.log(num.indexOf(9)) // se o resultado for -1, o valor não foi encontrado
for (let pos in num) {
    console.log('A posição ' + pos + ' tem um valor ' + num[pos])
}
