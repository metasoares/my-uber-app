// import React from 'react'

// export const SignIn = () => {
//   return (
//     <div>SignIn</div>
//   )
// }

import React , { useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import { useNavigate } from 'react-router-dom'
import { signInWithPopup,onAuthStateChanged, signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { provider, auth } from '../firebase'


export const SignIn = () => {

    const navigate = useNavigate()

    // const [ username, setUserName] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');

    const logIn = () => {
      
        // some fancy firebase here  
        const auth = getAuth();
        signInWithEmailAndPassword(auth,  email,password)
          .then(() => {
            // Signed in 
            navigate("/")
            // ...
          })
          .catch((error) => alert(error.message));
        //    signInWithEmailAndPassword(emailToLogin, passwordToLogin)
        //    .then(() => {
        //        router.push('/')
        //        console.log( "Auth",auth)
        //    })
        //    .cath(error => alert(error.message))

        // auth
        //    .signInWithEmailAndPassword(emailToLogin, passwordToLogin)
        //    .then(() => {
        //        router.push('/')
        //        console.log( "Auth",auth)
        //    })
        //    .cath(error => alert(error.message))
        }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                navigate('/')
            }
        })
    },[navigate])
    return (
        <Wrapper>
            <BackToSignUp>
                <Text onClick={()=>navigate("/signup")}>  Sign Up</Text>
            </BackToSignUp>
             <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" alt="uber logo image" />
             <UberLoginImage src="https://i.ibb.co/CsV9RYZ/login-image.png" alt="uber login image" />
             <LoginTitle>
                 Log in to access your account
             </LoginTitle>

            {/* <UberLoginImage src="https://i.ibb.co/CsV9RYZ/login-image.png" alt="uber login image" /> */}
            <SignInButton onClick={()=> signInWithPopup(auth, provider)}>
                Sign in with Google
            </SignInButton>
            <OrSeparator>Or</OrSeparator>
            <SignInEmailWithEmailAndpPasswordForm>
                <SignInContainer>
                <SignInUserNameInput type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="username" required/>
                    {/* <SignInEmailInput type="email" value={username} onChange={(e)=>setUserName(e.target.value)}  placeholder="username" required/> */}
                    <SignInPassWordInput type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" required/>
                    <SignInButtonForm  onClick={()=>logIn()} >Sign in Now</SignInButtonForm>
                </SignInContainer>
            </SignInEmailWithEmailAndpPasswordForm>
        </Wrapper>
    )
}

const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-300 p-4 overflow-y-scroll
`
const UberLogo = tw.img`
h-6 w-auto object-contain self-start
`

const LoginTitle = tw.div`
text-gray-500 text-5xl pt-4`

const UberLoginImage = tw.img`
w-full object-contain`

const SignInButton = tw.button`
bg-black py-4   mt-8 text-center text-white self-conter w-full `

const OrSeparator = tw.div`
flex justify-center my-4 `

const SignInEmailWithEmailAndpPasswordForm = tw.div`
flex flex-col items-center justify-center w-full   
`
const SignInContainer = tw.div`
flex-col flex gap-5 w-full`

const SignInEmailInput = tw.input`
w-full py-2 px-3  outline-none border border-none`

const SignInPassWordInput = tw.input`
w-full py-2 px-3  outline-none border border-none`

const SignInUserNameInput  = tw.input`w-full py-2 px-3  outline-none border border-none`

const SignInButtonForm = tw.button`
w-full bg-black text-center text-white p-4 mb-2`

const BackToSignUp = tw.div`
absolute top-3  right-3 bg-white  
`
const Text = tw.span`
flex  p-1 text-xs`
