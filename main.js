const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs")
const PORT = 5549

const authPass = "__9zkeuLAK" //пароль для входа

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
    res.send(fs.readFileSync("./json/db.json", "utf-8"));
})
app.get("/images", (req, res)=> {
    res.send(fs.readFileSync("./json/images.json", "utf-8"));
})
app.get("/users", (req, res)=> {
    res.send(fs.readFileSync("admin.html", "utf-8"));
})
app.get("/active", (req, res)=> {
    res.send(fs.readFileSync("active.html", "utf-8"));
})
app.get("/src/users", (req, res)=> {
    res.send(fs.readFileSync("./json/users.json", "utf-8"));
})
app.get("/src/active", (req, res)=> {
    res.send(fs.readFileSync("./json/active.json", "utf-8"));
})
app.post("/login", (req, res)=> {
    res.send({"data":req.body.data == authPass})
})
app.post("/src/users", (req, res)=> {
    if (req.query.save) {
        if (req.body.pass == authPass) {
            fs.writeFileSync("./json/users.json", JSON.stringify(req.body.data));
            res.send({"status":"Успешно"});
        } else {
            res.send({"status":"ты чем там занимаешься?! Щас ис клана кикну!"});
        }
    } else {
        const users = Array.from(JSON.parse(fs.readFileSync("./json/users.json", "utf-8")));
        users.push(req.body);
        fs.writeFileSync("./json/users.json", JSON.stringify(users));
        res.send({"status":"Успешно"});
    }  
})
app.post("/src/active", (req, res)=> {
    if (req.body.pass == authPass) {
        fs.writeFileSync("./json/active.json", JSON.stringify(req.body.data));
        res.send({"status":"Успешно"});
    } else {
        res.send({"status":"ты чем там занимаешься?! Щас ис клана кикну!"});
    }
})



app.listen(PORT, ()=>  {
    console.log(`server start on address http://127.0.0.1:${PORT}`);
})