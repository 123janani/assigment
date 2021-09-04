const express = require("express");

const router = express.Router();

const controller = require("./dependancies_controller");

router.get("/:pkgName", controller.getAll);

module.exports = router;
