let nome = prompt('Digite seu NOME:')
let sobrenome = prompt('Digite seu ÚLTIMO NOME:')
let idade = Number(prompt('Digite sua IDADE:'))
let cidade = prompt('Digite sua CIDADE:')
let estado = prompt('Digite seu ESTADO:')

console.log('Olá, ' + nome)
console.log('Nome e sobrenome: ' + nome + ' ' + sobrenome)
console.log('Idade: ' + idade)
console.log('Locação: ' + cidade + ", " + estado)
console.table({
    Nome: nome, 
    Sobrenome: sobrenome, 
    Ideade: idade + " anos", 
    Cidade: cidade,
    Estado: estado
})