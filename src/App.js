//Buildin
import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Components
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MapWithMarker from './components/MapWithMarker';
import Loading from './components/Loading';
import Profile from './components/Profile';

//Context
import GlobalContextData, { globalContext } from './Context/GlobalContext';

function App() {
  const globalContextItems = useContext(globalContext)
  // const [users, setUser] = useState(GlobalContextData.user)

  const coordinates = [
    { lat: 37.7749, lng: -122.4194 }, // San Francisco
    { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    { lat: 40.7128, lng: -74.0060 }   // New York
  ];

  async function fetchUser() {


    const checkUser = globalContextItems.user ? globalContextItems.user : false

    if (checkUser) {
      console.log('USER ALREADY PRESENT')
    }
    else {
      const token = await sessionStorage.getItem('token');

      const options = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token })
      }

      const response = await fetch('http://localhost:8000/user/getuser', options)
      const parsedResponse = await response.json()
      console.log(parsedResponse)
      await sessionStorage.setItem('token', parsedResponse.token)
    }
  }

  useEffect(() => {
    // fetchUser()
  }, [])

  return (
    <div className="App">
          <GlobalContextData>
            <BrowserRouter >
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/loading" element={<Loading />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
              {/* <MapWithMarker coordinates={coordinates} /> */}
            </BrowserRouter>
          </GlobalContextData>
    </div>
  );
}

export default App;
