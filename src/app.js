const express = require("express");
const app = express();

app.use("/host",(req,res)=>{
    res.send("hello teja");
})


app.listen(3333,()=>{
    console.log("sever is running succesfully ");
})
