import React, { useEffect, useRef } from 'react'
import bell from "../../assets/bell_icon.svg"
import caret_icon from "../../assets/caret_icon.svg"
import logo from '../../assets/logo.png'
import profile_img from "../../assets/profile_img.png"
import search_icon from '../../assets/search_icon.svg'
import "./Navbar.css"

const Navbar = () => {
  const navRef = useRef();
  useEffect(()=>{window.addEventListener("scroll",()=>{
    if(window.scrollY >= 80){
      navRef.current.classList.add('nav-dark');
    }
    else{
      navRef.current.classList.remove('nav-dark');
    }
  })},[])

  return (
    <div className='navbar' ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons'/>
        Children
        <img src={bell} alt="" className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile' />
          <img src={caret_icon} alt="" />
          <div className="drop-down">
            <p>Sing Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar