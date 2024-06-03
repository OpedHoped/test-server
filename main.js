const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs")

const corsOptions = {
	origin: '*',
    methods: '*'
};

const app = express()
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
app.post('/', (req, res)=> {
    // const db = JSON.parse(fs.readFileSync("db.json", "utf-8"))
    console.log(req.body)
    // db.push(req.body)
    // fs.writeFileSync("db.json", JSON.stringify(db))
    res.send({"status":"success", "data":db})
})

app.get('/', (req, res)=> {
    res.send(fs.readFileSync("index.html", "utf-8"))
})
app.get('/db', (req, res)=> {
    res.send(fs.readFileSync("db.json", "utf-8"))
})

app.listen(5155, ()=>  {
    console.log("server start on address http://127.0.0.1:5155")
})

