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
app.use(cors(corsOptions))
app.post('/db', (req, res)=> {
    res.send({"status":"success", "body":req.body})
})

app.get('/', (req, res)=> {
    res.send(fs.readFileSync("index.html", "utf-8"))
})

app.listen(5155, ()=>  {
    console.log("server start on address http://127.0.0.1:5155")
})

