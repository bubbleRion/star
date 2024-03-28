const express = require("express")
const fs = require("fs")
const port = 8080

const app = express()

app.get("/", (req , res)=>{
    fs.readFile("index.html" , "utf8" , (err , data)=>{
        if(err){
            console.error(err)
        }
        else{
            res.send(data)
        }
    } )
    
})

app.listen(port , ()=>{
    console.log("server is running http://localhost:8080")
})