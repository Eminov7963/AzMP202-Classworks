const BlogModel = require("../modules/productModules")

const getAlldata = async (req,res)=>{
    try {
        const prodcuts = await BlogModel.find({})
        if (!prodcuts) {
            res.status(404).send({
                error: "Products not finded!!"
            })
        }
        res.status(200).send({
            data:prodcuts,
            message: "All products succesfuly finded!!",
            error: null
        })
    } catch (error) {
        res.status(500).send({
            error: "error required!!"
        })
    }
}
const getDataById = async (req, res) => {
    const {id} = req.params;
  try {
    const prodcuts = await BlogModel.findById(id);
    if (!prodcuts) {
      res.status(404).send({
        error: "Product not finded!!",
      });
    }
    res.status(200).send({
      data: prodcuts,
      message: "product succesfuly finded!!",
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
    const prodcuts = await BlogModel.findByIdAndDelete(id);
    if (!prodcuts) {
      res.status(404).send({
        error: "Product not deleted!!",
      });
    }
    res.status(200).send({
      data: prodcuts,
      message: "product succesfuly deleted!!",
      error: null,
    });
  } catch (error) {
    res.status(500).send({
      error: "error required!!",
    });
  }
};
const postData = async (req, res) => {
  try {
    const products = await BlogModel({ ...req.body });
    await products.save();

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

module.exports = {getAlldata, getDataById, deleteDataById, postData};