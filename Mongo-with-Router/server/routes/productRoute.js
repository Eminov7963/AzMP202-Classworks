const express = require("express");

const {getAlldata,deleteData,postData,putDatabyId,searchByTitle,getProductById} = require("../controllers/productController")

const router = express.Router();

router.get("/",getAlldata);
router.get("/search",searchByTitle);
router.get("/:id",getProductById);

router.delete("/:id",deleteData);

router.post("/",postData);

router.put("/:id",putDatabyId);

module.exports = router;