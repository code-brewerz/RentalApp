const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rent_price:{
        type:Number,
        required:true
    },
    man_date:{
        type:Date,
        default: Date.now,

    },
    isOnRent:{
        type:Boolean,
        required:true
    },
    days_rented:{
        type:Number,
        required:true
    },
})

module.exports = mongoose.model('item',itemSchema)