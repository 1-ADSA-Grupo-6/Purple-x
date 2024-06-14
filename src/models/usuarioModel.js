var database = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT idUsuario, nomeCompleto, email, fkAcademia FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, telefone, academia) {
    var instrucaoSql = `
        INSERT INTO usuario (fkAcademia, nomeCompleto, email, senha, telefone, cargo) VALUES ('${academia}', '${nome}', '${email}', '${senha}', '${telefone}', 'Representante');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};