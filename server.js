require("dotenv").config();
const express = require('express')
let app = express()
const port = process.env.PORT;
const ejs = require('ejs');

app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname+ "/views"));
app.use(express.static(__dirname + "/public"));


//INDEX PAGES
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/start", (req, res) => {
    res.render("start");
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})