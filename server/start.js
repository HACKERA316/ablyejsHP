require("dotenv").config();
const express = require("express");

app = express();






app.get('/',(req, res) =>{
    res.sendFile("index.html");
})


app.listen(process.env.)