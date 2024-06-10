var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.get("/obterEmpresas", function (req, res) {
    empresaController.obterEmpresas(req, res);
})

module.exports = router;