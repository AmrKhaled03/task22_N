import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext';
import"./all.css"
export default function Login(props) {
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const authContext=useContext(AuthContext);
const login=(e)=>{
e.preventDefault();
if(pass==="Amr Khaled12" && email==="kamr4014@icloud.com"){
    const token="abc";
    localStorage.setItem("token " ,token);
    localStorage.setItem("email" , email);
    authContext.setAuth({token,email});


}else{
    alert("wrong iformation");
}
}
  return (

    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center ">
        <form >
        <h1 className={props.dark?"mb-5 text-center text-light" : "mb-5 text-center"}> 
           Login
        </h1>
        <input type="email"  className='form-control' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <input type="password"  className='form-control' placeholder='password' onChange={(e)=>setPass(e.target.value)}/>
        <br />
        <button className='btn btn-primary btn-md mb-5 log' onClick={login}>
            LOGIN
        </button>

    </form>
    </div>
    
  )
}
