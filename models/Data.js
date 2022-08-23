const mongoose = require('mongoose');
const { Schema } = mongoose;


const dataSchema = new Schema (
    {
        name:{
            type : String,
            required:true,
        },
        content:{
            type : String,
            required: true,
        },
    },
    {   
     timestamps : true
    }
 );

 module.exports = mongoose.model('Data', dataSchema)