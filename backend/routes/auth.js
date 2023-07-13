const express=require('express')
const bcrypt = require('bcryptjs');
const cookieparser=require("cookie-parser");
const {body,validationResult}=require('express-validator')
const User=require("../models/User")
const jwt = require('jsonwebtoken');

const protectRoute=require("../middleware/protectRoute")
const router=express.Router()
router.use(cookieparser());
const  JWT_SECRET="kjdhlsdjoijbl"
//Create a user using:Post "api/auth/createuser" Non login is required
router.post('/createuser',[
    body("name").isLength({min:3}),body("email").isLength({min:5}),body("password").isLength({min:8})],async (req,res)=>{
        
        //this errors returns an object 
    const errors=validationResult(req)
    //that objectcontains errros so errors.errors
    console.log("length is ",errors.errors.length)
    if(errors.errors.length==0){
        try {
            const salt =await bcrypt.genSalt(10)
            const hashedString=await bcrypt.hash(req.body.password,salt)
            req.body.password=hashedString
            let data=await User.create(req.body)
            const authtoken = jwt.sign({payload:data.id}, JWT_SECRET);
            res.cookie("isLoggedin",authtoken)
            res.send("cookie set succesfully")
           
            
        } catch (error) {
            // Duplicate entry
            if(error.code==11000){
               console.log("duplicate entry of",error.keyValue)
            }
            
        }
       
        

    }
    else{
        return res.status(400).json({errors:errors.array()})
    }
   
})

router.post("/login",
[body('email',"Enter Valid Email").isEmail(),body('password',"Password cannot be empty").exists()],

async (req,res)=>{
const errors=validationResult(req)
if(!errors.isEmpty()){
   return res.status(400).json({error:errors.array()})
}
const {email,password}=req.body
try {
    let user=await User.findOne({email:email})

if(user==null){
   return res.status(500).json({error:"Check the credentials"})
}
const password_check=await bcrypt.compare(password,user.password)
if(!password_check){
   return  res.send({error:"Check the credentials"})
    
}
const authtoken=jwt.sign({payload:user.id},JWT_SECRET)
res.cookie("isLoggedin",authtoken)
res.send("cookie set succesfully")
    
} catch (error) {
    console.log(error.message)
    res.status(500).send("Server Error")
    
}





})


//Route:-3 to get user details
router.get("/getUsers",protectRoute,async(req,res)=>{
//destructuring user_id from request
const {user_id}=req
const user_details=await User.findById(user_id).select("-password")
res.send(user_details)


})

module.exports=router