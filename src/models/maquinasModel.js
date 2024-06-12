var database = require("../database/config");

function obterMaquinas() {
    var instrucaoSql = `
    SELECT idAparelho, nome, categoria, urlImg FROM aparelho WHERE fkAcademia = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterCapturas() {
    var instrucaoSql = `
    SELECT idAparelho, nome, registro, momento FROM registro JOIN sensor ON registro.fkSensor = idSensor JOIN aparelho ON aparelho.fkSensor = idSensor WHERE fkAcademia = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterMaquinas,
    obterCapturas
};