const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, 'client/build')))

//Server routing is not yet completed
//To be finished this weekend
app.get("/", function(req, res){
    res.json({message: "Welcome home"})
})



app.get('*', (req,res) =>{
    res.sendFile(path.join('/Users/benjaminkoshy/Desktop/MERN/amazon/client/public/index.html'));
})

app.listen(process.env.PORT || 4000, function () {
    console.log("Running on port 4000")
})