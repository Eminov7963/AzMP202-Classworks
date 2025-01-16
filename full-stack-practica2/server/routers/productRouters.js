const express = require("express")

const {getAlldata, getDataById, deleteDataById, postData} = require("../controllers/productControllers")

const router = express.Router()

router.get("/",getAlldata)
router.get("/:id",getDataById)
router.delete("/:id",deleteDataById)
router.post("/", postData)

module.exports = router