const express = require('express')
const Note=require("../models/Notes")
const protectRoute=require("../middleware/protectRoute")
const router = express.Router()
const cookieParser = require('cookie-parser')
const Notes  = require('../models/Notes')
router.use(cookieParser())
//Login required
router.get("/fetchallnotes",protectRoute, async (req, res) => {

   
const notes=await Notes.find({user:req.user_id})
res.send({notes})
  
})
//Login Required---addnote
router.post("/addnote",protectRoute,async (req,res)=>{
    const{title,description,tag}=req.body;
    const note=new Note({title,description,tag,user:req.user_id})
    const savednote=await note.save()
    res.json(savednote)
  
})
//Login Required->update data
router.post('/update/:id',protectRoute,async(req,res)=>{
    try {
        console.log("updated ",req.user_id)

        const {title,description,tag}=req.body;
        const newNote={}
        if(title){newNote.title=title}
        if(description){newNote.description=description}
        if(tag){newNote.tag=tag}
        //what if other x note book id is somehow taken by y and kept in parameter and sent  so now y can update x notes to prevent from that add a if check
        // const data=Note.findById(req.params.id)
        // if(req.user_id!=data.user.toString()){
        //    return res.json(401).send("Not allowed")
        // }
    
        const updated_data=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote})
        res.send("Successfully updated")
        
    } catch (error) {
        res.status(400).send("Cannot update")
        
    }
  
})
router.delete('/deletenote/:id',protectRoute,async (req,res)=>{
    try {
        const data=await Notes.findById(req.params.id)
        if(!data){return res.status(400).send("Not Found")}
        if(data.user!=req.user_id){
            return res.status(401).send("Not allowed")
        }
        
    
        const updated_data=await Notes.findByIdAndDelete(req.params.id)
            res.send("Successfully deleted")
        
    } catch (error) {
        res.status(500).send("Internal Server Error");      
    }
   
})

//
module.exports = router