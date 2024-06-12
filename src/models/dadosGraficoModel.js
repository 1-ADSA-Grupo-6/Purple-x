var database = require("../database/config")

function obter(limite_linhas) {
    var instrucaoSql = `SELECT ap.nome AS 'Nome do aparelho', pa.demandaAlta AS 'Valor de demanda alta', 
    pa.demandaBaixa AS 'Valor da demanda baixa' FROM aparelho AS ap
    JOIN parametro AS pa ON ap.fkParametro = pa.idParametro;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    obter,
}