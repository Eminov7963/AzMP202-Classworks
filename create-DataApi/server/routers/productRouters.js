const express = require("express")

const {getAllProducts,getDataById,deleteDatabyID,postData,editDatabyid} = require("../controllers/productControllers")

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getDataById);
router.delete("/:id", deleteDatabyID);
router.post("/", postData);
router.put("/:id", editDatabyid);


module.exports = router