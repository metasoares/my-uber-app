import React , {useState} from 'react'
import tw from 'tailwind-styled-components'
import googleIcon from '../assets/google-icon.png'
import githubIcon from '../assets/github-transp-bg.png'
import { useNavigate} from 'react-router-dom'
import { analytics, provider, auth } from '../firebase'
import { signInWithPopup,onAuthStateChanged, getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

export const SignUp = () => {

  const navigate = useNavigate()

  // const history = useHistory()

  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
 
  const register =() => {
           
        
    // some fancy firebase here
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        if(auth){
            navigate("/")
        }
        // else {
        //   navigate('/')
        // }
        // ...
      })
      .catch((error) => alert(error.message));
       
 
}
  console.log('email:',email)
  console.log('email:',password)


  return (
    <SignUpContainer>
        <RidemeLogo>Rideme</RidemeLogo>
        <SignUpDetailsContainer>
            {/* First container */}
           <MessageToSignUp>Sign Up to Rideme</MessageToSignUp>
           <EmailInput type='text'  id=''  placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
           <PasswordInput  type='password'  id='' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <SignUpNowButton type='submit' id='' onClick={()=> register()}>Sign Up Now</SignUpNowButton>
        </SignUpDetailsContainer>
         <SignInOptionContainer>
            <OptionContainer>
                <SignInText>Are you already a user?</SignInText>
                <SignInAction onClick={()=> navigate('/signin')}>SignIn</SignInAction>
            </OptionContainer>
       </SignInOptionContainer>
        {/* Second One */}
        {/* <TextDivsionContainer>Or</TextDivsionContainer> */}
        <SignUpOptionsContainer>
            <GoogleOptionContainer>
              <GoogleImage src={googleIcon}  alt=''  />
                </GoogleOptionContainer>
            <GithubOptionContainer>
               <GithubImage src={githubIcon}  alt=''  />
            </GithubOptionContainer>
        </SignUpOptionsContainer>
       {/* LogIn Option */}
       {/* <SignInOptionContainer>
           <SignInText>Are you alreaady a user?</SignInText>
           <SignInAction>SignIn</SignInAction>
       </SignInOptionContainer> */}

    </SignUpContainer>
  )
}

const SignUpContainer = tw.main`w-full h-full flex flex-col pt-32 items-center gap-y-4 tracking-wide px-6`
const SignUpDetailsContainer = tw.div`w-56 h-44 flex flex-col gap-y-3 bg-yellow-700`

const RidemeLogo = tw.p`text-4xl text-blue-950`

const MessageToSignUp = tw.p`text-xl text-center`
const EmailInput = tw.input`w-full h-12 bg-white py-2 px-4 outline-none rounded-sm`
const PasswordInput = tw.input`w-full h-12 bg-white py-2 px-4 outline-none rounded-sm`
const SignUpNowButton = tw.button`w-full h-12 bg-slate-700 text-white text-lg outline-none rounded-sm cursor-pointer`

const SignInOptionContainer = tw.div`w-56 h-8 flex justify-end`
const OptionContainer = tw.div`w-44 flex h-auto text-sm justify-between `
const SignInText = tw.p`text-xs`
const SignInAction = tw.p`text-xs font-medium underline  text-sky-400 tracking-wide cursor-pointer font-medium`


const SignUpOptionsContainer = tw.div`w-56 h-24 flex justify-evenly items-center`

const GoogleOptionContainer = tw.div`w-14 h-14 rounded-full bg-white `
const GoogleImage = tw.img`w-full h-full object-fill`

const GithubOptionContainer = tw.div`w-14 h-14 rounded-full bg-white `
const GithubImage = tw.img`w-full h-full object-container `







