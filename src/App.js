import './App.css';
import UserDetails from './Pages/UserDetails/UserDetails';
import Home from './Pages/Home/Home';
// import RoutesContainer from './RoutesContainer/RoutesContainer';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Routecontainer from './Routecontainer/Routecontainer';
function App() {
  return (
    <div className="App">
      <div>
      <span className='blur first'></span>
     <span className='blur second'></span>
     </div>
     {/* <Home/> */}
     {/* <UserDetails/> */}
     <Routecontainer/>
    </div>
  );
}

export default App;
