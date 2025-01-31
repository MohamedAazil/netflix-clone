import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { auth } from './firebase';
import Home from "./pages/Home/home";
import Login from "./pages/Login/Login";
import Player from './pages/Player/Player';

const App = () => {
  const navigate = useNavigate();
  useEffect(() =>{
    onAuthStateChanged(auth, async (user) =>{
      if(user){
        console.log("Logged in");
        navigate('/home');
      }
      else{
        console.log("Logged out");
        navigate('/')
      }
    })
  },[]);
  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/" element = {<Login/>}/>
        <Route path="/home/player/:id" element = {<Player/>}/>
      </Routes>
    </div>
  )
}

export default App