const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs")
const PORT = 5549

const corsOptions = {
	origin: '*',
    methods: '*'
};

const app = express()
app.use(bodyParser.json())
// app.use(corsOptions.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.get('/', (req, res)=> {
    res.send(fs.readFileSync("index.html", "utf-8"));
})
app.get("/db", (req,res)=> {
    res.send(fs.readFileSync("db.json", "utf-8"));
})
app.get("/images", (req, res)=> {
    res.send(fs.readFileSync("images.json", "utf-8"));
})
app.get("/users", (req, res)=> {
    res.send(fs.readFileSync("users.json", "utf-8"));
})
app.post('/users', (req, res)=> {
    const users = Array.from(JSON.parse(fs.readFileSync("users.json", "utf-8")));
    users.push(req.body);
    fs.writeFileSync("users.json", JSON.stringify(users));
    res.send({"status":"success"});
})

app.listen(PORT, ()=>  {
    console.log(`server start on address http://127.0.0.1:${PORT}`);
})