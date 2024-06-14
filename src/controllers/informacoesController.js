var informacoesModel = require("../models/informacoesModel");

function obterDemandaAlta(req, res) {
    informacoesModel.obterDemandaAlta()
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.json(resultado);
                } else {
                    res.status(404).send("Nenhuma empresa encontrada!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function obterDemandaBaixa(req, res) {
    informacoesModel.obterDemandaBaixa()
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.json(resultado);
                } else {
                    res.status(404).send("Nenhuma empresa encontrada!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function obterInatividadeMaquina(req, res) {
    var idSensor = req.params.id;
    informacoesModel.obterInatividadeMaquina(idSensor)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.json(resultado);
                } else {
                    res.status(404).send("Sem resposta");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function obterMediaDia(req, res) {
    var idSensor = req.params.id;
    informacoesModel.obterMediaDia(idSensor)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.json(resultado);
                } else {
                    res.status(404).send("Sem resposta");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    obterDemandaAlta,
    obterDemandaBaixa
    ,obterInatividadeMaquina,
    obterMediaDia
};