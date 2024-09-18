const ProductSchema = require("../Model/ProductSchema")

const addProduct = async (req,res) =>{
    const {name,price,Descption,category} = req.body;
    try {
        const newProduct =  await new ProductSchema({
            name,
            price,
            Descption,
            category
        })
        await newProduct.save()
        res.status(201).json({messsage:"product added sucessfully",newProduct})

    } catch (error) {
        res.json({messsage:"error occur while adding",error})
        console.log(error); 
    }
}

const getProduct = async (req,res) =>{
    try {
        const allData = await ProductSchema.find()
        res.status(201).json({messsage:"product fetched",allData})
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
        console.log(error);
    }
}

const updateProduct = async (req,res) =>{
    try {
        let id = req.params.id
        let data = await ProductSchema.findByIdAndUpdate(id,req.body)
        res.json({messgae:"updated done!",data})
    } catch (error) {
        res.json({messgae:"error occur while update",error})
        console.log(error);  
    }
}

const deleteProduct = async (req,res) =>{
    try {
        let id = req.params.id
        let data = await ProductSchema.findByIdAndDelete(id)
        res.json({messgae:"data deleted done!",data})
    } catch (error) {
        res.json({messgae:"error occur while deleting",error})
          console.log(error); 
    }
}


module.exports = {addProduct,getProduct,updateProduct,deleteProduct}
