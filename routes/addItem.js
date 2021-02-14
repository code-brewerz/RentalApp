const express = require('express')

const router = express.Router();

const item = require('../models/Item')

// getting versioncheck
router.get('/:name/:rent_price/:isOnRent/:days_rented',async (req,res)=>{
   let name = req.params.name
   let rent_price = req.params.rent_price
   let isOnRent = req.params.isOnRent
   let days_rented = req.params.days_rented
   try{
       addItem = item.save() 
   }catch(err){
       res.json({message:err.message})
   }
})

module.exports = router