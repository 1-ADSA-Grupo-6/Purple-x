var contatoModel = require("../models/contatoModel");

function registrarContato(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var descricao = req.body.descricaoServer;
    var assunto = req.body.assuntoServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("o nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (descricao == undefined) {
        res.status(400).send("Sua descricao está undefined!");
    }else if (assunto == undefined) {
        res.status(400).send("Sua descricao está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo contatoModel.js
        contatoModel.registrarContato(nome, email, descricao, assunto)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    registrarContato,
}