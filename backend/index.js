const express=require("express");
// const dotenv = require('dotenv');
// const connectDB = require('./config/database');
// const authController = require('./controllers/authController');
const app=express();

const port=8080;
const path=require("path");

// dotenv.config();
// connectDB();

app.use(express.urlencoded({extends:true}));
app.use(express.json());

app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"../views"));
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/services", (req, res) => {
    res.render("services.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});



app.post("/login", (req, res) => {
    // Handle login form submission
    const { email, password } = req.body;
    // Add your login logic here
});

app.post("/signup", (req, res) => {
    // Handle signup form submission
    const { fullname, email, password } = req.body;
    // Add your signup logic here
});


app.listen(port,()=>{
    console.log("app is listing to port");
})