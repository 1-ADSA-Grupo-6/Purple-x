var express = require("express");
var router = express.Router();

var maquinasController = require("../controllers/maquinasController");

router.get("/obter", function (req, res) {
    maquinasController.obterMaquinas(req, res);
});

router.get("/obterCapturas", function (req, res) {
    maquinasController.obterCapturas(req, res);
});

module.exports = router;