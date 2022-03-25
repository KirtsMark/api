const app = require('express')();
const PORT = 8080;
const fs = require('fs');
const val = require('./triangle.json')

app.listen(
    PORT,
    () => console.log('its alive on http://localhost:' + PORT)
)
app.get("/triangle",(req,res)=>{
    fs.readFile('./triangle.json',"utf8", (err,data) =>{
        if(err) throw err;
        data = JSON.parse(data);
        var base = data.base;
        var height = data.height;
        var area = (base*height)/2;
        res.send({"area":area});
    })
})