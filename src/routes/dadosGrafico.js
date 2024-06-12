var express = require("express");
var router = express.Router();

var dadosGraficoController = require("../controllers/dadosGraficoController");

router.get("/obter", function (req, res) {
    dadosGraficoController.obter(req, res);
});

module.exports = router;