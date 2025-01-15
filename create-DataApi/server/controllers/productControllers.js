const BlogModel = require("../modules/productModules")

const getAllProducts = async (req,res)=>{
    try {
        const products = await BlogModel.find({})
        if (!products) {
            return res.status(404).send({
                error: "Not founded products"
              })  
        }
        res.status(200).send({
            data:products,
            message: "all products succesfuly getted",
            error: null
        })
    } catch (error) {
      res.status(500).send({
        error: "error required!!"
      })  
    }
}
const getDataById = async (req,res)=>{
  const{id}= req.params;
  try {
      const products = await BlogModel.findById(id)
      if (!products) {
          return res.status(404).send({
              error: "Not founded products"
            })  
      }
      res.status(200).send({
          data:products,
          message: "all products succesfuly getted",
          error: null
      })
  } catch (error) {
    res.status(500).send({
      error: "error required!!"
    })  
  }
}

const deleteDatabyID = async (req,res)=>{
  const{id}= req.params;
  try {
      const deleted = await BlogModel.findByIdAndDelete(id)
      if (!deleted) {
          return res.status(404).send({
              error: "Not founded products"
            })  
      }
      res.status(200).send({
          data:deleted,
          message: "all products succesfuly deleted",
          error: null
      })
  } catch (error) {
    res.status(500).send({
      error: "error required!!"
    })  
  }
}

const postData = async (req,res)=>{
  const{title,description,price,oldPrice,stars} = req.body
  if (!title || !description ||!price || !oldPrice ||!stars ) {
    res.status(404).send({
      error: "Requst is empty!!"
    })
  }
  try {
      const product =  BlogModel({...req.body})
      await product.save()
      if (!product) {
          return res.status(404).send({
              error: "dont posted"
            })  
      }
      res.status(200).send({
          data:product,
          message: "all products succesfuly posted",
          error: null
      })
  } catch (error) {
    res.status(500).send({
      error: "error required!!"
    })  
  }
}

const editDatabyid = async (req,res)=>{
  const {id} = req.params
  try {
      const product = await BlogModel.findByIdAndUpdate(id,{...req.body})
      
      if (!product) {
          return res.status(404).send({
              error: "dont puted"
            })  
      }
      res.status(200).send({
          data:product,
          message: "all products succesfuly puted",
          error: null
      })
  } catch (error) {
    res.status(500).send({
      error: "error required!!"
    })  
  }
}
module.exports = {getAllProducts,getDataById,deleteDatabyID,postData,editDatabyid}