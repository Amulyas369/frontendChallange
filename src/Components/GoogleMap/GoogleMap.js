import React from 'react'



function GoogleMap({lati,long}) {
 let link=`https://maps.google.com/maps?q=${lati},${long}&hl=es;&output=embed`
    console.log(long);
      return (
       
        <div style={{ height: '250px', width: '380px',borderRadius:"2rem" }}>
          <iframe src={link}style={{ height:'100%', width:'100%',borderRadius: "2rem"}}></iframe>
        </div>
  )
}

export default GoogleMap