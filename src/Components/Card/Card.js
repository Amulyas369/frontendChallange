import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Card.css"
function Card() {
const[userlist,setUserlist]=useState([]);

const GetData=async ()=>{
    const{data}=await axios.get("https://panorbit.in/api/users.json");
    setUserlist(data.users);
    console.log(data);
    console.log(data.users);
    
}
useEffect(()=>{
    GetData();
},[])



  return (
    <div className='Card'>
        <div className='card-heading'>
           <h3>Select an account</h3>
        </div>
        <div className='profile-holder-section'>
            {
             userlist && userlist.length>0 ? userlist.map((item)=>{
                return(
               <Link to={`/details/${item.id}`}><div className='profile-holder'>
                <img src={item.profilepicture}alt=''/>
                <div>{item.name}</div>
            </div></Link> 
                )
              }):"Loading..."
            }
        
        </div>
    </div>
  )
}

export default Card