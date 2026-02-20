# Programming Server
> Server is a machine which is programmed to to respond the request of users.

## Program server to response user
```
npm init -y         - to initiate a node js application project
npm i express       - to build a server we need to instal expressJS

create a server.js

const express = require("express")
const app = express()   // server instance create karna
const port = 3000

      //  request, response
app.get("/", (req, res)=>{      // client ko kaha pr bhejna hai jab wo homepage pr aaye
    res.send("Welcome to Backend - Day 2 - Programming Server")
})

app.listen(port, ()=>{      // aap.listen server ko start karta hai
    console.log("server is running on port", port);
})

```
## General Port numbers to be used
Port are the place where general process took place so when we start our server so our server's process runs on that port number

- 3000
- 5500
- 8080
- 7000
- 8000
- 5173

## Use of nodemon

> npx nodemon "fileName.js" helps to restart server automatically after any change in file

## Deploy Server
```
never deploy your node_modules & dotenv folder (.gitignore)

1st to git commit your code and push it in the remote repo

render.com provides free machine for learners to deploy and test there server code in remote - does code work smoothly or not after deployment
```

## Understanding what are APIs

## What is REST API

## Creating mini project with REST API

