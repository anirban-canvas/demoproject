import { useState } from "react";

import {useNavigate} from 'react-router-dom'
import axios from "axios";
export  default function useAuth(){

const navigate = useNavigate();
const[auth,setAuth]=useState(()=>{

        localStorage.setItem("token","")


})

function setToken(token){

        return new Promise((res)=>{
            
            setAuth({
                token:token
            })
            localStorage.setItem("token",token)
            console.log(localStorage.getItem("token"))
            res()
        })

}


return {
    auth,
    async login(username,password){
        try{
       let result= await  axios({
            method: 'post',
            url: 'http://localhost:3300/account/login',
            data: {
                username: username,
              password: password
            }
          });

        await setToken(result.data.token)
        console.log("token setup done")
        navigate("/home");
        }catch(err){
            return {"error":"login error"}
        }
    },
    async logout(){
       await setToken("")
    }

}

}


