var database = require("../database/config")

function obter(limite_linhas) {
    var instrucaoSql = `select registro,
    aparelho.nome as nome
    from registro join aparelho ON registro.fkSensor = aparelho.fkSensor
    join parametro ON aparelho.fkParametro = parametro.idParametro
    where aparelho.idAparelho = 3;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    obter,
}