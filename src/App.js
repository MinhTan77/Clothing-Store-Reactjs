import React from 'react';
import { Routes, Route, 
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import About_us from './Pages/About_us';
import Register from './Pages/Register';
import Contacts from './Pages/Contacts';
const App =() => {
    return (
      <div>
      <Routes>
        <Route >
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='about' element={<About_us/>}/>
          <Route path='register' element={<Register/>}/>\
          <Route path='contact' element={<Contacts />} />
          
        </Route>
      </Routes>
    </div>
    )
}

export default App;
