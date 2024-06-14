var maquinasModel = require("../models/maquinasModel");

function obterDemanda(req, res) {
    maquinasModel.obterDemanda()
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.json(resultado);
                } else {
                    res.status(404).send("Nenhum parametro encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function obterMaquinas(req, res) {
    maquinasModel.obterMaquinas()
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.json(resultado);
                } else {
                    res.status(404).send("Nenhuma máquina encontrada!");
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

function obterUltimasCapturas(req, res) {
    maquinasModel.obterUltimasCapturas()
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

function removerMaquina(req, res) {
    var idMaquina = req.body.idMaquina;

    if (idMaquina == undefined) {
        res.status(400).send("O idMaquina está undefined!");
    } else {
        maquinasModel.removerMaquina(idMaquina)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(erro => {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function renomearMaquina(req, res) {
    var idMaquina = req.body.idMaquina;
    var novoNome = req.body.novoNome;

    if (idMaquina == undefined) {
        res.status(400).send("O idMaquina está undefined!");
    } else if (novoNome == undefined) {
        res.status(400).send("O novoNome está undefined!");
    } else {
        maquinasModel.renomearMaquina(idMaquina, novoNome)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(erro => {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function inserirSensor(req, res) {
    maquinasModel.inserirSensor()
        .then(function (resultado) {
            res.status(200).send("Estatísticas inseridas com sucesso!");
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function inserirMaquina(req, res) {
    const idMaquina = req.body.id;
    const nomeMaquina = req.body.nome;
    const urlMaquina = req.body.url;
    const categoriaMaquina = req.body.categoria;
    const mapeamentoMaquina = req.body.mapeamento;

    if (idMaquina == undefined ||
        nomeMaquina == undefined ||
        urlMaquina == undefined ||
        categoriaMaquina == undefined) {
        res.status(400).send("O comando de inserção está undefined!");
    } else {
        maquinasModel.inserirMaquina(idMaquina, nomeMaquina, urlMaquina, categoriaMaquina, mapeamentoMaquina)
            .then(function (resultado) {
                res.status(200).send("Estatísticas inseridas com sucesso!");
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
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