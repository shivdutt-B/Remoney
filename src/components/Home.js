import React, { useContext, useEffect } from 'react'
import { globalContext } from '../Context/GlobalContext'
import L from 'leaflet';
import Loading from './Loading';

function Home() {
  const globalContextItems = useContext(globalContext)

  async function Location() {

  }

  async function nearestSellers(longitude, latitude) {
    // get the nearest products that other users are selling.
    const options = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ longitude: longitude, latitude: latitude })
    }

    let nearestSellers = await fetch('url', options)
    console.log(nearestSellers)

  }
  function getLocation() {
    // Taking users location to display the nearest products.
    // TODO: 
    // while any user is selling a product take its location.... then whenever any user lands on website take his location also then.....then according to the locaiton of the user show him the nearest products that people are selling lets say 10km.
    // detect user precise location and fetch the nearest sellers 
    // console.log('flag2')
    if ("geolocation" in navigator) {
      // Geolocation is supported
      navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log("Latitude: " + latitude + ", Longitude: " + longitude);




        const map = L.map('map').setView([latitude, longitude], 13);

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add a marker at the specified location
        L.marker([latitude, longitude]).addTo(map);



        // Do something with the latitude and longitude, like displaying it on a map
      }, function (error) {
        // Handle error
        console.error("Error getting geolocation:", error);
      });
    } else {
      // Geolocation is not supported
      console.error("Geolocation is not supported by this browser.");
    }



  }

  useEffect(() => {
    // getLocation()
  }, [])
  return (
    globalContextItems.loading ?
    <Loading/>
    :
    `NOT LOADING ${<i className="fa-regular fa-user"></i>}` 
  )
}

export default Home