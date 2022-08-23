// const express = require('express');
import express from 'express';
import mongoose from 'mongoose';
// const mongoose = require('mongoose');
const app = express();
import bodyParser from 'body-parser';
// const bodyParser = require('body-parser');
import cors from 'cors';
// const cors = require('cors');
// const Data = require('./models/Data');
const MONGODB_URL ='mongodb+srv://heeyoon1302:Fuckpenisex3258!@metaverse-and-me.sjoicej.mongodb.net/?retryWrites=true&w=majority'

// require('dotenv').config({path: "variables.env"});

mongoose.connect(MONGODB_URL, {useNewUrlParser : true}, (err)=> {
                if(err) {
                    console.timeLog(err)
                } else{
                    console.log('Connected to database successfully');
                }
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

  

// app.get("/data", async (req, res) => {

