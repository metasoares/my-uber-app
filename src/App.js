import React , { useState} from 'react'
import './App.css';
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'
//Pages
import { Home } from './components/Home'
import { Confirm } from './components/Confirm'
import { Search } from './components/Search'
import { SignUp } from './components/SignUp'
import { SignIn } from './components/SignIn'





function App() {

  //Pick Up and dropOff for pages that requires
  const [pickUp, setPickUp ] = useState("")
  const [dropOff, setDropOff] = useState("")


  return (
       <div className="w-full h-screen bg-gray-300">
       <Router>
          <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/search' element={<Search pickup={pickUp} dropoff={dropOff} setPickUp={setPickUp} setDropOff={setDropOff} />}  />
            <Route path='/confirm' element={<Confirm pickup={pickUp} dropoff={dropOff} />}  />
            <Route path='/signup' element={<SignUp />}  />
            <Route path='/signin' element={<SignIn/>}  />
          </Routes>
          </Router>
      </div>
  );
}

export default App;
