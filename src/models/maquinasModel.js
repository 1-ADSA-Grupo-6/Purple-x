var database = require("../database/config");

function obterDemanda() {
    var instrucaoSql = `
    SELECT * FROM parametro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterMaquinas() {
    var instrucaoSql = `
        SELECT * FROM aparelho
        WHERE fkAcademia = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterCapturas() {
    var instrucaoSql = `
    SELECT idAparelho, nome, registro, momento FROM registro JOIN sensor ON registro.fkSensor = idSensor JOIN aparelho ON aparelho.fkSensor = idSensor WHERE fkAcademia = 1 ORDER BY momento;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterUltimasCapturas() {
    var instrucaoSql = `
    SELECT idAparelho, nome, registro, momento FROM registro JOIN sensor ON registro.fkSensor = idSensor JOIN aparelho ON aparelho.fkSensor = idSensor WHERE fkAcademia = 1 AND momento = (SELECT MAX(momento) FROM registro) ORDER BY momento;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function removerMaquina(idMaquina) {
    var instrucaoSql = `
        UPDATE aparelho SET nome = 'Desativado' WHERE idAparelho = ${idMaquina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function renomearMaquina(idMaquina, novoNome) {
    var instrucaoSql = `
        UPDATE aparelho SET nome = '${novoNome}' WHERE idAparelho = ${idMaquina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirSensor() {
    var instrucaoSql = `INSERT INTO sensor VALUES (DEFAULT);` 

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirMaquina(idMaquina, nomeMaquina, urlMaquina, categoriaMaquina, mapeamentoMaquina) {
    var instrucaoSql = `INSERT INTO aparelho VALUES ('${idMaquina}', '1', '${idMaquina}', 1, '${nomeMaquina}', '${categoriaMaquina}', '${urlMaquina}', '${mapeamentoMaquina}');`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDemanda,
    obterMaquinas,
    obterCapturas,
    obterUltimasCapturas,
    removerMaquina,
    renomearMaquina,
    inserirMaquina,
    inserirSensor
};