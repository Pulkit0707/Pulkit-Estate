import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect("mongodb+srv://pulkit0707chawla:hjYdcSqb3ot3ItwC@pulkit-estate.jsrhprz.mongodb.net/?retryWrites=true&w=majority&appName=pulkit-estate").then(()=>{
    console.log('Connected to mongdb');
}).catch((err)=>{
    console.log(err);
});

const app=express();

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})