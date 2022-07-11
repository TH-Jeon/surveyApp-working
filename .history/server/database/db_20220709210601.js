import mongoose from 'mongoose';

const Connection = async(username, password)=>{
    const URL = 'mongodb+srv://${username}:j02K8L6uRD4tTNmP@cluster0.eeyo9uy.mongodb.net/media?retryWrites=true&w=majority';
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