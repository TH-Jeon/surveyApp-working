import axios from 'axios';

const URL = '';
export const addUser=(data)=>{
    try{
       s axios.post(`${URL}/add`, data);
    }catch(error){
        console.log(`error while calling addUser api`, error);
    }
}