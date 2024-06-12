var empresaModel = require("../models/empresaModel");

function obterEmpresas(req, res) {
    empresaModel.obterEmpresas()
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

module.exports = {
    obterEmpresas,
};