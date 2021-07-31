const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, 'client/build')))

app.get("/api", function (req, res) {
    res.json({message: "Hello world"})
})

app.get("/home", function(req, res){
    res.json({message: "Welcome home"})
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

app.listen(process.env.PORT || 4000, function () {
    console.log("Running on port 4000")
})