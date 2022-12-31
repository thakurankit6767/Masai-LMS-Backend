const express = require("express");

const Lecture = require("../model/lecture.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController.post(Lecture));
router.get("", crudController.get(Lecture));
router.delete("", crudController.get(Lecture));

module.exports = router;
