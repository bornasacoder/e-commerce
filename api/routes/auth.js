const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
// Register here
router.post("/register", async (req, res)=>{
    const newUser = new User({
        username : req.body.username,
        fullname: req.body.fullname,
        email : req.body.email,
        password : CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
        phone: req.body.phone,
        address: req.body.address,
        gender: req.body.gender,
  });
  try{
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  }catch (err){
    res.status(500).json(err);
  }
});

// Login here
router.post("/login", async (req, res)=>{
  try{
    const user = await User.findOne({username: req.body.username});
    !user && res.status(401).json("Wrong Credentials!")
    const hashedPassword = CryptoJS.AES.decrypt(
       user.password,
       process.env.PASS_SECRET
       );
    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    Originalpassword !== req.body.password && 
    res.status(401).json("Wrong Credentials!");
    
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      {expiresIn: "3d"}
    );

    const { password, ...others} = user._doc; 
    res.status(200).json({...others, accessToken});
  }catch(err){
    res.status(500).json(err);
  }
})

module.exports = router;