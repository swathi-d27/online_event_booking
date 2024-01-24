
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Add from './users/Add';
import Edit from './users/Edit';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
       
      <Router>
 
      <Navbar/>
      
      <Routes>
      <Route exact path="/admin" element={<Admin/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/adduser" element={<Add/>}/>
      <Route exact path="/edit/:id" element={<Edit/>}/>
      <Route exact path="/register" element={<Register/>}/>
     
      </Routes>
    

      </Router>
     
    </div>
  );
}

export default App;