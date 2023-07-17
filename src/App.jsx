import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './componants/Home';
import Login from './Login';
import Signup from './componants/Signup';
import Navbar from './componants/Navbar';
import EventHandling from './componants/EventHandling';


function App() {
  return (
    <div>
 <BrowserRouter>
     <Navbar/>
    
     <Routes>
      <Route path='/' element={ <Navigate to="/home"/>} />
      <Route path='home' element={ <Home />}/>
      <Route path='login' element={ <Login />}/>
      <Route path='Signup' element={ <Signup />}/>
      <Route path='event' element={ <EventHandling />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
