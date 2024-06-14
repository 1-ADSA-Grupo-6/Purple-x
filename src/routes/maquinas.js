var express = require("express");
var router = express.Router();

var maquinasController = require("../controllers/maquinasController");

router.get("/obterDemanda", function (req, res) {
    maquinasController.obterDemanda(req, res);
});

router.get("/obter", function (req, res) {
    maquinasController.obterMaquinas(req, res);
});

router.get("/obterCapturas", function (req, res) {
    maquinasController.obterCapturas(req, res);
});

router.get("/obterUltimasCapturas", function (req, res) {
    maquinasController.obterUltimasCapturas(req, res);
});

router.put("/removerMaquina", function (req, res) {
    maquinasController.removerMaquina(req, res);
});

router.put("/renomearMaquina", function (req, res) {
    maquinasController.renomearMaquina(req, res);
});

router.post("/inserirSensor", function (req, res) {
    maquinasController.inserirSensor(req, res);
});

router.post("/inserirMaquina", function (req, res) {
    maquinasController.inserirMaquina(req, res);
});

module.exports = router;