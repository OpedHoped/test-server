const express = require("express")
const fs = require("fs")
const cors = require("cors")
const bodyParser = require("body-parser");

const corsOptions = {
	origin: '*',
    methods: '*'
};

const app = express()
app.use(bodyParser.json())
app.use(cors(corsOptions))
app.post('/db', cors(corsOptions), (req, res)=> {
    const db = Array.from(JSON.parse(fs.readFileSync("db.json", "utf-8")))
    db.push(req.body)
    fs.writeFileSync("db.json", JSON.stringify(db))
    res.send({"status":"success"})
})

app.get('/', (req, res)=> {
    res.send(fs.readFileSync("index.html", "utf-8"))
})

app.listen(5155, ()=>  {
    console.log("server start on address http://127.0.0.1:5155")
})

