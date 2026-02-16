const express = require("express") // to require express
const server = express()   // to create express server instance
const port = 3000   // port where server will run

server.listen(port, ()=>{  // started the server
    console.log("Server is running on port ", port);
})

server.get("/", (req, res)=>{      // server return response
    res.send("welcome to origin of backend")
})