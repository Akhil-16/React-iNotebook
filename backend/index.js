const connectToMongo=require('./db')
const express=require("express")
connectToMongo()
const app=express()
app.use(express.json())
const cors = require('cors');

app.use("*",cors({
    origin:true,
    credentials:true
}))
app.use("/api/auth",require('./routes/auth'))
app.use("/api/notes",require('./routes/notes'))
app.post("/create",(req,res)=>{
    res.send("done")

})

app.listen(8080,()=>{
    console.log("listening to  port 8080")
})