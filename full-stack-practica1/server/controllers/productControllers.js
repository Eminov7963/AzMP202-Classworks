const BlogModel = require("../modules/productModules")

const getAllData = async (req,res)=>{
    try {
        const products = await BlogModel.find({})
        if (!products) {
           return res.status(404).send({
             error: "products not finded!!",
           }); 
        }
        res.status(200).send({
            data:products,
            message: "produtcs succesfuly finded",
            error: null
        })
    } catch (error) {
        res.status(500).send({
            error: "error required!!"
        })
    }
}
const getAllDataById = async (req, res) => {
    const{ id }= req.params;
  try {
    const products = await BlogModel.findById(id);

    if (!products) {
      return res.status(404).send({
        error: "products not finded!!",
      });
    }
    res.status(200).send({
      data: products,
      message: "produtcs succesfuly finded",
      error: null,
    });
  } catch (error) {
    res.status(500).send({
      error: "error required!!",
    });
  }
};

const deleteDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await BlogModel.findByIdAndDelete(id);

    if (!products) {
      return res.status(404).send({
        error: "products not deleted!!",
      });
    }
    res.status(200).send({
      data: products,
      message: "produtcs succesfuly deleted",
      error: null,
    });
  } catch (error) {
    res.status(500).send({
      error: "error required!!",
    });
  }
};

const postProduct = async (req, res) => {
  try {
    const products = await BlogModel({...req.body});
    await products.save()

    if (!products) {
      return res.status(404).send({
        error: "products didin`t posted!!",
      });
    }
    res.status(200).send({
      data: products,
      message: "produtcs succesfuly deleted",
      error: null,
    });
  } catch (error) {
    res.status(500).send({
      error: "error required!!",
    });
  }
};


module.exports = { getAllData, getAllDataById, deleteDataById, postProduct };


