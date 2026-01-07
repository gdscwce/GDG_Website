import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async ()=>{

    const data = {
      email: username,
      password: password,
    };

    try {
      const res = await api.post("/admin/login", data);
      if(res.status === 200){
        alert("Login successful");
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      }
    }catch(e){
      alert("Login failed: " + e);
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <div>
        <label>Email</label><br />
        <input type="text"  onChange={(e)=>{setUsername(e.target.value)}}/>
      </div>

      <br />

      <div>
        <label>Password</label><br />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>

      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
