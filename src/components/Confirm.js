import React,{useMemo, useState, useEffect} from 'react'
import tw from 'tailwind-styled-components'
//Component
import { Map } from './Map'
// import {
//   useParams,
//   useLocation,
//   useHistory,
//   useRouteMatch
// } from 'react-router-dom'
// import queryString from "query-string";
import { useNavigate } from 'react-router-dom'





export const Confirm = ({ pickup, dropoff }) => {


console.log('pickUp: ', pickup)
console.log('dropOff: ', dropoff)

const [ pickupCoordinates, setPickupCoordinates] = useState([0,0])
const [ dropoffCoordinates, setDropoffCoordinates] = useState([0,0])



const getPickupCoordinates = (pickup) => {

  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
  new URLSearchParams({
      access_token: 'pk.eyJ1IjoiYnJ1bm9za2lsbHMiLCJhIjoiY2t2Z3pjNHNrMGJucTJ2czMzcXpkZDF1NCJ9.HVqkqBnL7KNVQLxTFodqqw'
  }))
  .then( res => res.json())
  .then(data => setPickupCoordinates(data.features[0].center))
}

const getDropoffCoordinates = (dropoff) => {

  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
  new URLSearchParams({
      access_token: 'pk.eyJ1IjoiYnJ1bm9za2lsbHMiLCJhIjoiY2t2Z3pjNHNrMGJucTJ2czMzcXpkZDF1NCJ9.HVqkqBnL7KNVQLxTFodqqw'
  }))
  .then( res => res.json())
  .then(data => setDropoffCoordinates(data.features[0].center))
}

//useEffect
useEffect(() => {
  getPickupCoordinates()
  getDropoffCoordinates()
})


//useNavigate
const navigate = useNavigate()
const backToSearch = () => navigate('/search')

  return (
    <ConfirmContainer>
      <BackHomeContainer onClick={backToSearch}>
      <BackHomeIcon src="https://img.icons8.com/ios-filled/50/0000/left.png" alt="a back button image"/>
      </BackHomeContainer>
        <Map  dropoffCoordinates={dropoffCoordinates}  pickupCoordinates={pickupCoordinates}/>
        <RideSection>
           Confirm
        </RideSection>
    </ConfirmContainer>
  )
}


const ConfirmContainer = tw.main`w-full h-full flex flex-col`
const RideSection = tw.section`w-full h-screen flex-1 flex-col bg-white`
const BackHomeIcon = tw.img`absolute w-10 h-8 object-contain`
const BackHomeContainer = tw.div`absolute left-2 top-2 w-11 h-11 bg-white rounded-full flex items-center justify-center cursor-pointer`

