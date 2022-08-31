const Order = require('../models/Order');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const router = require('express').Router();
// CREATE 
router.post ("/", verifyToken, async(req, res)=>{
    const newOrder = new Order(req.body);
    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }catch(err){
        res.status(500).json(err);
    }
})


// Update the order
router.put("/:id", verifyTokenAndAdmin, async (req, res)=>{  
    try{
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {new: true}
      );
      res.status(200).json(updatedOrder);
    }catch(err){
        res.status(500).json(err);
    }
})

// delete the order
router.delete("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id);
       res.status(200).json("Order has been deleted successfully...");   
}catch(err){
    res.status(500).json(err);
}
});

// get user order
router.get("/find/:id", verifyTokenAndAuthorization ,async (req, res)=>{
    try{
      const orders = await Order.findOne(req.params.id);
       res.status(200).json(orders);   
    }
catch(err){
    res.status(500).json(err);
}
});


// get all order data
router.get("/", verifyTokenAndAdmin, async (req, res)=>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }catch(err){
       res.status(500).json(err);
    }
})

// Get monthly income
router.get("/income", verifyTokenAndAdmin, async(req, res)=>{
    const productId = req.query.pid;
    const date  = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    // console.log(lastMonth);
    const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));
    // console.log(previousMonth);

    try{

        const income = await Order.aggregate([
            {$match: {createdAt: {$gte: previousMonth}, ...(productId && {
                products: {$elemMatch: {productId}},
            })}},
            {$project : {
                month: {$month: "$createdAt"},
                sales: "$amount",
            }},
            {$group: {
                _id: "$month",
                total: {$sum: "$sales"}
            }}
        ])
        res.status(200).json(income);
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router