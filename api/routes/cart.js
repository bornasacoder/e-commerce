const Cart = require('../models/Cart');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

const router = require('express').Router();
// CREATE 
router.post("/", verifyToken, async(req, res)=>{
    const newCart = new Cart(req.body);
    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json(err);
    }
})


// Update the cart
router.put("/:id", verifyTokenAndAuthorization, async (req, res)=>{  
    try{
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {new: true}
      );
      res.status(200).json(updatedCart);
    }catch(err){
        res.status(500).json(err);
    }
})

// delete the users
router.delete("/:id", verifyTokenAndAuthorization, async (req, res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
       res.status(200).json("Cart has been deleted successfully...");   
}catch(err){
    res.status(500).json(err);
}
});

// get user Cart
router.get("/find/:id", verifyTokenAndAuthorization ,async (req, res)=>{
    try{
      const cart = await Cart.findOne(req.params.id);
       res.status(200).json(cart);   
    }
catch(err){
    res.status(500).json(err);
}
});


// get all Cart data
router.get("/", verifyTokenAndAdmin, async (req, res)=>{
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }catch(err){
       res.status(500).json(err);
    }
})

module.exports = router