const express = require('express')
const mongoose = require('mongoose')
const app = express();
//MonogoDB Middlewre

DB_CONNECTION = 'mongodb+srv://admin-sakha:H0NZviCRhIaG2tph@cluster0.rw3cj.mongodb.net/versions?retryWrites=true&w=majority'

mongoose.connect(DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology: true},(err)=>{
    if(err){
        console.error(err);
    }
    console.log('Database Initiated');
})

const item = require('./models/Item')

app.get("/",async (req,res)=>{
    try{
        const items = await item.find()
        res.json(items)
    }catch(err){
        res.json({message:err.message})
    }
})



app.post('/',async (req,res)=>{
    const items = new item({
        name:"home",
        rent_price:5000,
        isOnRent:false,
        days_rented:0
    })
    try{
        const new_item = await items.save();
        res.json(new_item)
    }catch(err){
        res.json({message:err.message})
    }
})



app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Initiated");
})