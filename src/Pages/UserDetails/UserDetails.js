import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Profile from '../Profile/Profile'
import "./UserDetails.css"
import {useParams} from 'react-router-dom'
import axios from 'axios';
import Auth from '../../Components/Auth/Auth';



function Useritem() {
  const params = useParams();
  console.log(params)
  const[isProfile,setProfile]=useState(false);
  const[isPost,setPost]=useState(false);
  const[isGallery,setGallery]=useState(false);
  const[isTodo,setTodo]=useState(true);
  const[details,setdetails]=useState([]);
  const[isAuth,setAuth]=useState(false)
  const id = params.id || '';

  const fetchData = async () =>{
    try{
      const{data}=await axios.get(`https://panorbit.in/api/users.json?user.id=${id}`);
      setdetails(data.users[id-1]) 
      console.log(data);
      console.log(data.users[id]);
    }catch(error){
      console.error(error)
    }
}

 
useEffect(()=>{
  fetchData();

},[])


const profilenameClick=()=>{
  if(!isAuth){
    setAuth(true);
  }
}
const webClick=()=>{
if(isAuth){
  setAuth(false);
}
}

  const profileClick=()=>{
     if(!isProfile){
      setProfile(true);
      setTodo(false);
    setGallery(false);
    setPost(false);
     }
  }
  const postClick=()=>{
    if(!isPost){
      setPost(true)
     setProfile(false);
    }
 }
 const galleryClick=()=>{
  if(!isGallery){
    setGallery(true)
    setPost(false)
   setProfile(false);
  }
}
const todoClick=()=>{
  if(!isTodo){
    setTodo(true)
    setGallery(false)
    setPost(false)
   setProfile(false);
  }
}


  return (
    
    <div className='details' onClick={webClick}>
      <div className='navbar'>
        <h4 onClick={profileClick}style={{color:isProfile?'white':"#3b2e2e"}}>Profile</h4>
        <hr/>
        <h4 onClick={postClick}style={{color:isPost?'white':"#3b2e2e"}}>Posts</h4>
        <hr/>
        <h4 onClick={galleryClick}style={{color:isGallery?'white':"#3b2e2e"}}>Gallery</h4>
        <hr/>
        <h4 onClick={todoClick}style={{color:isTodo?'white':"#3b2e2e"}}>ToDo</h4>
      </div>
      <div className='profile-sec'>
        <div className='profile-nav'>
            <div className='session-name'>
                <h3>{isProfile ? "Profile" : isPost?"Post": isGallery?"Gallery":"ToDo" }</h3>
            </div>
           
              <div className='loginUser'>
              <img src={details.profilepicture} alt=""/>
             <h5 className='ligid'onClick={profilenameClick} >{details.name}</h5>
            </div>
            
            
        </div>
        <hr style={{width:"100%",color:"rgba(0,0,0,.5)",height:"1.2px",backgroundColor:"#3b2e2e",opacity:".5"}}/>
        {isProfile ?  <Profile
              image={details.profilepicture}
              name={details.name}
              username={details.username}
              email={details.email}
              phone={details.phone}
              website={details.website}
              companyname={details.company.name}
              catchphrase={details.company.catchPhrase}
              bs={details.company.bs}
              street={details.address.street}
              suite={details.address.suite}
              city={details.address.city}
              zipcode={details.address.zipcode}
              lat={details.address.geo.lat}
              lng={details.address.geo.lng}
        />:<Posts

        />}
        
    </div>
    {isAuth?<Auth
    image={details.profilepicture}
    name={details.name}
    email={details.email}
    />:""}

    </div>
  )
}

export default Useritem