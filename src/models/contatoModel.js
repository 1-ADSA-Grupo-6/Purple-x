var database = require("../database/config")

function registrarContato(nome, email, assunto, descricao) {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarContato():", nome, email, descricao);
    var instrucaoSql = `
        INSERT INTO contato (nome, email, assunto, descricao, momentoContato) VALUES ('${nome}', '${email}', '${assunto}', '${descricao}', now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarContato,
};