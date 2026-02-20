const express = require("express")
const app = express()   // server instance create karna
const port = 3000

app.get("/", (req, res)=>{
    res.send("Welcome to Backend - Day 2 - Programming Server")
})

app.get("/about", (req, res)=>{ // api path kaise set hota hai
    res.send("This is about page of day 2")
})

app.listen(port, ()=>{      // aap.listen server ko start karta hai
    console.log("server is running on port", port);
})