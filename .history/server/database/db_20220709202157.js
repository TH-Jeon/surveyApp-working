import mongoose from 'mongoose';

const connection = ()=>{
    const URL = '';
    try{
       await mongoose.connect(URL, {
            useNewUrlParser:true,
            useUnifiedTopology: true,})
    }catch(error){
        console.log(`error while connecting to the database`, error)
    }
}