const express = require("express")
const path = require("path")
const app = express();
const hbs = require('hbs');

var exphbs  = require('express-handlebars');
app.use(express.json());
require("./db")

app.set('view engine', '.hbs'); 
const User = require("./schema");
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render('index'); 
})

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server started on ${port}`);
})
