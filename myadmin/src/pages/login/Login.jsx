import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import { login } from '../../redux/apiCalls';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleClick = (e) =>{
        e.preventDefault();
         login(dispatch, {username, password});
    };

  return (
    <div style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center"           
     }} >
        <input style={{
            padding:"10px",
        marginBottom:"20px"
         }}
          type="text"
           placeholder='username' 
           onChange={(e)=> setUsername(e.target.value)} />
        <input style={{
            padding:"10px",
        marginBottom:"20px"
         }} type="password" placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
        <button style={{
            padding:"10px",
            marginBottom: "20px",
            width:"100px"
        }} onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login