import React, { useEffect, useState } from 'react'
import "./Auth.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

function Auth({image,name,email}) {
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
    <div className='Auth'>
        <div className="upper">
        <img src={image}alt=''/>
        <h5 className='name'>{name}</h5>
        <h5 className='email'>{email}</h5>
        </div>
        <hr/>
        <div className='upper'>
        
        {
             userlist.map((item,index)=>{
                while(index<2)
                return(
               <Link to={`/details/${item.id}`}><div className='uprofile-holder'>
                <img src={item.profilepicture}alt=''/>
                <div>{item.name}</div>
            </div></Link> 
                )
              })
            }
         <Link to="/"><button>Sign Out</button></Link>
        </div>
    </div>
  )
}

export default Auth