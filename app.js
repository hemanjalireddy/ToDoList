const express = require('express');
const bodyParser = require('body-parser');

const app=express();

let items=[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    let today=new Date();
  
    let day="";
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    day= today.toLocaleString("en-US",options);

    res.render('list', {kindofDay: day, newListItems: items});
})
  
app.post("/",function(req,res){
    let item=req.body.newItem;
    items.push(item);
    res.redirect("/");
})
app.listen(3000,function() {
    console.log("app listening to port 3000");
});