const express = require("express")
const fs = require("fs")
const cors = require("cors")
const bodyParser = require("body-parser")

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
};

const app = express()
app.use(bodyParser.json())
app.use(cors(corsOptions))
app.post('/', cors(corsOptions), (req, res)=> {
    console.log(req.body)
    res.send({"a":"c"})
})

app.get('/', (req, res)=> {
    res.send(fs.readFileSync("index.html", "utf-8"))
})

app.listen(5155, ()=>  {
    console.log("server start on address http://127.0.0.1:5155")
})

