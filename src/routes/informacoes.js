var express = require("express");
var router = express.Router();

var informacoesController = require("../controllers/informacoesController")

router.get("/demandaAlta", function (req, res) {
    informacoesController.obterDemandaAlta(req, res);
});

router.get("/demandaBaixa", function (req, res) {
    informacoesController.obterDemandaBaixa(req, res);
});

router.get("/obterInatividade/:id", function (req, res) {
    informacoesController.obterInatividadeMaquina(req, res);
});

router.get("/obterMediaDia/:id", function (req, res) {
    informacoesController.obterMediaDia(req, res);
});

module.exports = router;