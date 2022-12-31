const express = require("express");

const Assignment = require("../model/assignment.model")

const crudController = require("./crud.controller")

const router = express.Router();

router.post ("", crudController.post(Assignment))  
router.get("", crudController.get(Assignment))
router.delete("", crudController.get(Assignment))

 

module.exports = router;