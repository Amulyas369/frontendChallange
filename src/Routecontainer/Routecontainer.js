import React from 'react'
import Home from '../Pages/Home/Home'
import UserDetails from '../Pages/UserDetails/UserDetails'
import{BrowserRouter,Routes,Route} from "react-router-dom"

function Routecontainer() {
  return (
    <div>
        <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<UserDetails/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routecontainer