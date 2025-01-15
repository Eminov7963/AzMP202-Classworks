const express = require("express");

const{ getAllData, getAllDataById, deleteDataById, postProduct } = require("../controllers/productControllers")

const router = express.Router();

router.get("/", getAllData)
router.get("/:id", getAllDataById)
router.delete("/:id", deleteDataById)
router.post("/",postProduct)

module.exports = router