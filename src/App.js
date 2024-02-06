import History from './User/History';
import './App.css';
import Main from './User/Main';
import {  BrowserRouter as Router, Routes } from 'react-router-dom';
import {  Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UserHome_Eventdisplay from './User/UserHome_Eventdisplay';
import Navbar from './layout/Navbar';
import EventDisplay from './User/EventDisplay';
import UserProfile from './User/UserProfile';
import Confirm from './User/Confirm';
function App() {
  return (
    <Router>
 
    <Navbar/>
    
<Routes>
    <Route exact path="/home" element={<UserHome_Eventdisplay/>}/>
  
    <Route exact path="/profile/:uid" element={<UserProfile/>}/>
    
    <Route exact path="/" element={<Main/>}/>
   <Route exact path="/qr" element={<Confirm/>}/>
    <Route exact path="/event/:id" element={<EventDisplay/>}/>
    <Route exact path="/history" element={<History/>}/>
    
</Routes>
    
  

    </Router>
   
  );
}

export default App;