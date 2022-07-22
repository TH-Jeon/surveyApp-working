import axios from 'axios';

const URL = 'http://localhost:8080';
export const addUser=async(data)=>{
    try{
       return await axios.post(`${URL}/adduser`, data);
    }catch(error){
        console.log(`error while calling addUser api`, error);
    }
}

export const getUser = async()=>{
    try{
        return await axios.get(`${URL}/alluser`);
    }catch(error){
        console.log(`Error while calling getUser api`, error);
    }
}


export const getThisUser = async(id)=>{
    try{
        return await axios.get(`${}`);
    }catch(error){
        console.log(`Error while calling getThisUser api`, error);
    }
}