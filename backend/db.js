const { connect } = require("http2");
const mongoose= require("mongoose");
const url="mongodb+srv://purmasai:ZLy5Vs7aw5Zh4Pet@cluster0.xxodxm0.mongodb.net/?retryWrites=true&w=majority"

let connectdb = async()=>{

 try{
let con = await mongoose.connect(url,{useUnifiedTopology :true,useNewUrlParser: true} )
 console.log("database is connected with the given URI ")
}
catch(err){
console.log(err)
}


}


module.exports= connectdb


