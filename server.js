const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Data = require('./models/Data');
require('dotenv').config({path: "variables.env"});


// app.listen( 8000,(err)=>{
//         if(err){
//             return console.log(err);
//         }else{
            mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser : true}, (err)=> {
                if(err) {
                    console.timeLog(err)
                } else{
                    console.log('Connected to database successfully');
                }
        //     });
        // }    
    });



app.use(bodyParser.json());
app.use(cors());



app.post('/data', (req,res)=> {
  const newData = new Data();
  newData.name = req.body.name,
  newData.content = req.body.content,
  newData.save()
    .then((data)=>{
       console.log(data);
       res.json(data);
    })
})




app.get("/data", async (req, res) => {
    const data = await Data.find();
     res.json(data);
});

  

