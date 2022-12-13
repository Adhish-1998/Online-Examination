const mongoose = require('mongoose');
let  objectId = mongoose.Schema.Types.ObjectId
let qustionSchema =new mongoose.schema({
    adminId:{
        type:objectId,
        ref:"Admin",
        required:true
    },
    question:{
        type:String,
        required:true,
        trim:true
    },
    // answer:{
    //     type: String,
    //     enum:["a","b","c","d"]
    // },
    correctAns :{
        type:String,
        required:true
    }
},{timestamp:true})

module.exports = mongoose.model("Que",qustionSchema)
