import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import back_arrow from "../../assets/back_arrow_icon.png";
import "./Player.css";
const Player = (key) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODg4MzdkYjk4ZjIwM2JjMWYyMGI2YzVlZjZmYTYwZCIsIm5iZiI6MTczODE3NjAyMy42NjUsInN1YiI6IjY3OWE3NjE3ODE5ZWQyZWFiMDM0NDA1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aaRx2RgGLki4jJHDOvKzIJ3Bn0cU_84pHO23ZuwUDGg'
    }
  };
  const [apidata, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type : ""
  });
useEffect(() =>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));},[])

  return (
    <div className="player">
      <img src={back_arrow} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe
        src={`https://www.youtube.com/embed/${apidata.key}`}
        title="Trailer"
        frameBorder="0"
      ></iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  );
};

export default Player;
