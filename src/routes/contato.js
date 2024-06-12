var express = require("express");
var router = express.Router();

var contatoController = require("../controllers/contatoController");

router.post("/registrarContato", function (req, res) {
    contatoController.registrarContato(req, res);
});

module.exports = router;