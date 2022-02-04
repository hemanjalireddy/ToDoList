const express = require('express');
const bodyParser = require('body-parser');
const date=require(__dirname+"/date.js");

const app=express();

let items=["Buy Groceries"];
let workList=[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    let day= date();                                     

    res.render('list', {listTitle: day, newListItems: items});
})
  
app.post("/",function(req,res){
    let item=req.body.newItem;

    if(req.body.list==="Work"){
        workList.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
 
})

app.get("/work",function(req,res){
    res.render('list',{listTitle:"Work List", newListItems:workList})
})

app.post("/work",function(req,res){
    let work=req.body.newItem;
    workList.push(work);
    res.redirect("/work");
})
app.listen(3000,function() {
    console.log("app listening to port 3000");
});