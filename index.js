const express = require("express")
const app = express()

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended : false }))

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/zcod29DofuWp",(req,res)=>{
    res.render("chat")
})

app.post("/search",(req, res)=>{
  let data = req.body.key
})

app.listen(8080, () => console.log("Listening for requests on http://localhost:8080"))