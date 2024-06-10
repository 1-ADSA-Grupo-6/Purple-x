var database = require("../database/config");

function obterEmpresas() {
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    var instrucaoSql = `
    SELECT idAcademia, nome, token FROM academia;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    obterEmpresas
};