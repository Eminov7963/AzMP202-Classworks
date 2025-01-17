const BlogModel = require("../modules/productModules")

const getAllData = async (req,res)=>{
    try {
        const products = await BlogModel.find({})
        if (!products) {
            res.status(404).send({
                error: "products dont getted!!"
            })
        }
        res.status(200).send({
            data: products,
            message: "all producst geted",
            error: null
        })
    } catch (error) {
        res.status(500).send({
            error: "error required!!"
        })
    }
}
const getDataById = async (req, res) => {
    const{id} = req.params;
  try {
    const products = await BlogModel.findById(id);
    if (!products) {
      res.status(404).send({
        error: "product dont getted!!",
      });
    }
    res.status(200).send({
      data: products,
      message: "product geted",
      error: null,
    });
  } catch (error) {
    res.status(500).send({
      error: "error required!!",
    });
  }
};

const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await BlogModel.findByIdAndDelete(id);
    if (!products) {
      res.status(404).send({
        error: "product dont deleted!!",
      });
    }
    res.status(200).send({
      data: products,
      message: "product deleted",
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
    const products = BlogModel({ ...req.body });
    await products.save()
    if (!products) {
      res.status(404).send({
        error: "product dont posted!!",
      });
    }
    res.status(200).send({
      data: products,
      message: "product posted",
      error: null,
    });
  } catch (error) {
    res.status(500).send({
      error: "error required!!",
    });
  }
};

module.exports = {getAllData,getDataById,deleteData,postData}