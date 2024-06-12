var dadosGraficoModel = require("../models/dadosGraficoModel");
function obter(req, res) {

    const limite_linhas = 7;

    console.log(`Recuperando as ultimas ${limite_linhas} dadosGrafico`);

    dadosGraficoModel.obter(limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas dadosGraficos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    obter,
}