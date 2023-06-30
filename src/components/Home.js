import React, {useState, useEffect} from 'react'
import tw from "tailwind-styled-components"
import { Map } from './Map'
import { useNavigate } from 'react-router-dom'
import { analytics, provider, auth } from '../firebase'
import { onAuthStateChanged, signOut} from 'firebase/auth'

//Default User Image
import userDefaultImage from '../assets/user-default-image.jpg'
import homeCarImg from '../assets/car-home-page.png'
import homeBikeImg from '../assets/bike-home.png'
import homeReserveImg from '../assets/reserve-homePage.png'


export const Home = () => {

  //
  const navigate = useNavigate()
  const goToSearch = () => navigate('/search')
//
  const [ user, setUser] = useState(null)

  useEffect(()=>{
   return  onAuthStateChanged(auth,user => {
      if(user) {
       setUser({
        //  username: user.displayName,
         email: user.email,
         name: user.displayName,
         photoURL: user.photoURL
       })}
       else {
         setUser(null)
         navigate('/signup')
       }
    })

    
          
  
  },[navigate])

  //SignOut
  const signOutUser =() => {
    // const auth = getAuth();
    signOut(auth)
    .then(()=> {
      setUser(null)
      navigate("/signup")
    })
  }

  return (
    <HomeContainer>
        <Map />
        <ActionsContainer>
        <SignOutButtonContainer>
             <SignOutButton onClick={()=>signOutUser()}>Sign Out</SignOutButton>
          </SignOutButtonContainer>
          <RidemeDescription>
            <RidemeTitle>Rideme</RidemeTitle>
            <RidemeProfileContainer>
              {
                user && user.email ?
                <>
                  <Email>{user && user.email}</Email>
                </>
                :
                <>
                <Email>Welcome</Email></>
              }
               <ProfileImageContainer>
                 <ProfileImage src={userDefaultImage} alt='User Default Image' />
               </ProfileImageContainer>
            </RidemeProfileContainer>
          </RidemeDescription>
          <ActionsItemsContainer>
             <RideContainer onClick={goToSearch}>
                <CarImage src={homeCarImg} alt='A car that takes you to anywhere you want' />
             </RideContainer>
             <BikeContainer>
             <BikeImage src={homeBikeImg} alt='A car that takes you to anywhere you want' />
                
             </BikeContainer>
             <ReserveContainer>
                <ReserveImage src={homeReserveImg} alt='A car that takes you to anywhere you want' />
             </ReserveContainer>
             
          </ActionsItemsContainer>
          <ActionsWhereTo>

          </ActionsWhereTo>
        </ActionsContainer>
    </HomeContainer>
  )
}

const HomeContainer = tw.main`w-full h-full flex flex-col`
const ActionsContainer = tw.section`w-full h-1/2 flex flex-col bg-white py-4 px-2`

const RidemeDescription = tw.div`w-full h-20  flex items-center justify-between`
const ActionsItemsContainer = tw.div`w-full h-40 flex justify-between items-center my-2`
const ActionsWhereTo = tw.div`w-full h-14 bg-blue-800`

const RidemeTitle = tw.h1`text-2xl font-medium`
const RidemeProfileContainer = tw.div`w-auto h-full flex gap-x-2  items-center`
const Email = tw.p`text-xs`
const ProfileImageContainer = tw.div`w-14 h-14 rounded-full border-2 border-gray-200 flex justify-center items-center`
const ProfileImage = tw.img`w-12 h-12 object-fill rounded-full `

const RideContainer = tw.div`w-20 h-24 bg-gray-300 rounded-md flex justify-center items-center`
const CarImage = tw.img`w-12 h-12 object-fill `

const BikeContainer = tw.div`w-20 h-24 bg-gray-300 rounded-md flex justify-center items-center`
const BikeImage = tw.img`w-12 h-12 object-fill `


const ReserveContainer = tw.div`w-20 h-24 bg-gray-300 rounded-md flex justify-center items-center`
const ReserveImage = tw.img`w-12 h-12 object-fill `


const SignOutButtonContainer = tw.div`
absolute top-3 left-3  w-22  bg-white rounded-xs
`
const SignOutButton = tw.div`
text-xs  text-center p-1 font-medium cursor-pointer`






