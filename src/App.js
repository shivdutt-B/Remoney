//Buildin
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Components
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
