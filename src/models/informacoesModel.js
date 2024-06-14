var database = require("../database/config")

function obterDemandaAlta() {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarContato():");
    var instrucaoSql = `
       SELECT a.nome, r.momento
        FROM registro r
        JOIN aparelho a ON r.fkSensor = a.fkSensor
        WHERE r.fkSensor = (
            SELECT fkSensor
            FROM registro
            GROUP BY fkSensor
            ORDER BY COUNT(*) DESC
            LIMIT 1
        );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDemandaBaixa() {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarContato():");
    var instrucaoSql = `
       SELECT a.nome, r.momento
        FROM registro r
        JOIN aparelho a ON r.fkSensor = a.fkSensor
        WHERE r.fkSensor = (
            SELECT fkSensor
            FROM registro
            GROUP BY fkSensor
            ORDER BY COUNT(*) ASC
            LIMIT 1
        );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterInatividadeMaquina(idSensor) {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarContato():");
    var instrucaoSql = `
       WITH registros_com_lag AS (
            SELECT
                r.fkSensor,
                a.nome,
                r.registro,
                r.momento,
                LAG(r.momento) OVER (PARTITION BY r.fkSensor ORDER BY r.momento) AS momento_anterior
            FROM
                registro r
            JOIN
                aparelho a ON r.fkSensor = a.fkSensor
            WHERE
                r.fkSensor = '${idSensor}'
        ),
        tempos_calculados AS (
            SELECT
                fkSensor,
                nome,
                registro,
                momento,
                momento_anterior,
                TIMESTAMPDIFF(SECOND, momento_anterior, momento) AS diferenca_segundos
            FROM
                registros_com_lag
            WHERE
                momento_anterior IS NOT NULL
        ),
        tempos_agrupados AS (
            SELECT
                fkSensor,
                nome,
                IFNULL(SUM(CASE WHEN registro = '1' THEN diferenca_segundos ELSE 0 END), 0) AS tempo_ativo_segundos,
                IFNULL(SUM(CASE WHEN registro = '0' THEN diferenca_segundos ELSE 0 END), 0) AS tempo_inativo_segundos
            FROM
                tempos_calculados
            GROUP BY
                fkSensor, nome
        )
        SELECT
            fkSensor,
            nome,
            FLOOR(tempo_ativo_segundos / 60) AS tempo_ativo_minutos,
            tempo_ativo_segundos % 60 AS tempo_ativo_segundos_restantes,
            FLOOR(tempo_inativo_segundos / 60) AS tempo_inativo_minutos,
            tempo_inativo_segundos % 60 AS tempo_inativo_segundos_restantes
        FROM
            tempos_agrupados;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterMediaDia(idSensor) {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarContato():");
    var instrucaoSql = `
      SELECT ROUND(AVG(total_usos)) AS media_usos
        FROM (
            SELECT COUNT(*) AS total_usos
            FROM registro
            WHERE fkSensor = ${idSensor}
            AND DATE(momento) = '2024-06-14'
            AND registro = '1'
        ) AS subquery;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
} 

module.exports = {
    obterDemandaAlta,
    obterDemandaBaixa,
    obterInatividadeMaquina,
    obterMediaDia
};