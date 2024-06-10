var maquinasModel = require("../models/maquinasModel");

function obterMaquinas(req, res) {
    maquinasModel.obterMaquinas()
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.json(resultado);
                } else {
                    res.status(404).send("Nenhum jogador encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function obterCapturas(req, res) {
    maquinasModel.obterCapturas()
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.json(resultado);
                } else {
                    res.status(404).send("Nenhuma captura encontrado!");
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
    obterMaquinas,
    obterCapturas
};