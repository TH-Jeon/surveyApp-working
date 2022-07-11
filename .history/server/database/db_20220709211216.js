import mongoose from 'mongoose';

const Connection = async(U)=>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.eeyo9uy.mongodb.net/media?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL, {
            useNewUrlParser:true,
            useUnifiedTopology: true,})
            console.log(`database connected successfully`)
    }catch(error){
        console.log(`error while connecting to the database`, error)
    }
}

export default Connection;