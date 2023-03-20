import React from 'react'
import GoogleMap from '../../Components/GoogleMap/GoogleMap'
import "./Profile.css"
function Profile({
  name,username,email,phone,website,image,companyname,catchphrase,bs
  ,street,suite,city,zipcode,lat,lng
}) {
  return (
    <div className='profile'>
        <div className='profile-left'>
          <div className='profile-pic'>
           <img src={image}alt=''/>
            <h2>{name}</h2>
            <div className='loginDetails'>
            <h3>UserName : <span>{username}</span></h3>
            <h3>Email : <span>{email}</span></h3>
            <h3>Phone : <span>{phone}</span></h3>
            <h3>Website : <span>{website}</span></h3>
            </div>
            <hr/>
            <div className='companyDetail'>
            <h3>Company</h3>
              <h3>Name : <span>{companyname}</span></h3>
              <h3>Catchphrase : <span>{catchphrase}</span></h3>
              <h3>bs : <span>{bs}</span></h3>
            </div>
          </div>
        </div>
        
        <div className='profile-right'>
          <h3>Address:</h3>
        <div className='address-sec'>
         <div className='address'>
          <div className='addressDetails'>
          <div className='address-left'>
          <h3>Street : </h3>
            <h3>Suite : </h3>
            <h3>City : </h3>
            <h3>Zipcode : </h3>
          </div>
          <div className='address-right'>
            <h3>{street}</h3>
            <h3>{suite}</h3>
            <h3>{city}</h3>
            <h3> {zipcode}</h3>
         </div>
         </div>
          <GoogleMap
          lati={lat}
          long={lng}
          />      
         </div>
        </div>
        </div>
    </div>
  )
}

export default Profile