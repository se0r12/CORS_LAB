const express = require("express");
const cors = require("cors")
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        maxAge: 60 * 10 * 1000
    }
}));

var corsOptions = {
    "origin": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "credentials": true
}
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    req.session.destroy((err) =>{
        if (err){
            console.log(err);
            return res.render("signin");
        }
        console.log("destroy success")
    })
    return res.render("signin");
});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "user" && password === "user"){
        req.session.username = username;
        return res.redirect("/lab1/secret");
    };
    return res.render("signin");

});

app.get("/lab1/secret", cors(corsOptions), (req, res) => {
    if (req.session.username !== "user") {
        return res.redirect("/")
    }
    return res.render("lab1");
})

app.listen(3000);
