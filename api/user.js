const express = require('express');
const uuid = require('uuid');
const userModel = require('../app/models/user');
const router = express.Router();


router.get("/",(req,res)=> res.render("index.ejs"));

router.post("/user",(req,res)=>{
    let name = "Aditya";
    let email = "aditya1@xyz.com";
    
    let data = {
        id : uuid.v4(),
        name : "Aditya",
        email : "aditya1@xyz.com"
    }


   let mydata = new userModel(data);

    mydata.save()
        .then(item=> res.send("item saved to database"))
        .catch(err=>{
            res.status(400).send("unable to save to database");
        })
    
})


router.get("/user",(req,res)=>{
    userModel.find({},(err,docs)=>{
        if(err){
            console.log("Error occured");
        }else{
            res.json(docs);
            
            console.log(docs[0].name);
        }
    })
})


router.get("/user/:id",(req,res)=>{
    let obj = userModel;
    obj.find({id:req.params.id},(err,docs)=>{
        if(err){
            console.log("Not found");
        }else{
          res.json(docs);
        }
    })
})


router.get("/user/update/:id",(req,res)=>{
    let obj  = userModel;
    obj.findByIdAndUpdate(req.params.id, {name:"aditya"},{new:true},(err,docs)=>{
        if(err){
            console.log("Update error occured"+ err);

        }else{
             res.send(docs);
            console.log(docs);
        }
    })
})

router.get("/user/delete/:id",(req,res)=>{
    let obj = userModel;
    obj.findByIdAndDelete(req.params.id,(err,docs)=>{
        if(err){
            console.log(err);
        }else{
            res.send("entry deleted");
        }
    })
})


module.exports = router;