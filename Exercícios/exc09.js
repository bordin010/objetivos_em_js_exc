// Exercício 9 – Conta de Usuário
// Crie um objeto conta com:
// usuario
// senha
// nivel
// Depois, exiba a mensagem:
// // O usuário eduardo possui nível administrador e utiliza a senha 1234, muito fraca por sinal.

let conta = {
    usuario: "eduardo",
    nivel: "administrador",
    senha: 1234
}

console.log(`O usuário ${conta.usuario} possui nível ${conta.nivel} e utiliza a senha ${conta.senha}, muito fraca por sinal. `)