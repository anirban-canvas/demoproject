import { useState } from 'react'
import useAuth from '../contexts/AuthProvider.js'

export default function Login(){

const {login}=useAuth()
const [username,setUsername]=useState("")
const [password,setPassword]=useState("")

const loginHandler=async ()=>{
    let res=await login(username,password)
    if(res&&res.error){
        console.log("error")
    }
}


    return (
        
        <div className="container d-flex-login">
            <div className="login-container">
                <div><span>User Name</span> <span><input value={username} onChange={(e)=>setUsername(e.target.value)}/></span></div>
                <div><span>Password</span> <span><input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/></span></div>
                <div><button onClick={()=>loginHandler()}>Login</button></div>
            </div>
        </div>

    )

}