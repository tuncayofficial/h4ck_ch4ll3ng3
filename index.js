const express = require("express")
const app = express()

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended : false }))

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/zcod29DofuWp",(req,res)=>{
    res.render("key")
})

app.post("/search",(req, res)=>{
  let data = req.body.key
  if(data === "macros"){
      res.redirect("users")
  } else {
      res.redirect("/")
  }
})

app.get("/users",(req,res)=>{
    res.render("macros")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login",(req,res)=>{
    let { username, password } = req.body
    if(username === "sams3p1ol_" && password === "mrrobot3111"){
        res.redirect("/dashboard")
    } else {
        res.redirect("/login")
    }
})

app.get("/dashboard",(req,res)=>{
    res.render("dashboard")
})

app.get("/zcod29DofuWp",(req, res) =>{
    res.render("key")
})

app.get("/server",(req, res) =>{
    res.render("server")
})

app.get("/success",(req, res) =>{
    res.render("success")
})

app.post("/keycode",(req, res) =>{
    const { keycode } = req.body;
    if(keycode === "3134292"){
        res.redirect("/server")
    } else {
        res.redirect("back")
    }
})

app.post("/delete",(req,res)=>{
    let data = req.body.username;
    if(data === "d3st4__"){
        res.render("success")
    } else {
        res.redirect("back")
    }
})

app.listen(8080, () => console.log("Listening for requests on http://localhost:8080"))