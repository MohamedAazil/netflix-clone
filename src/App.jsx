import React, { useEffect } from 'react';
import { redirect, Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./pages/Home/home";
import Login from "./pages/Login/Login";
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const navigate = useNavigate();
  useEffect(() =>{
    onAuthStateChanged(auth, async (user) =>{
      if(user){
        console.log("Logged in");
        navigate('/');
      }
      else{
        console.log("Logged out");
        navigate('/login')
      }
    })
  },[]);
  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/player/:id" element = {<Player/>}/>
      </Routes>
    </div>
  )
}

export default App