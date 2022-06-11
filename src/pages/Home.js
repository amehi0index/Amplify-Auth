import { useState } from 'react'
import { Auth } from 'aws-amplify'
import SignIn from '../components/Signin'
import SignUp from '../components/SignUp'

import ConfirmSignUp from '../components/ConfirmSignUp'
import ForgotPassword from '../components/ForgotPassword'
import ForgotPasswordSubmit from '../components/ForgotPasswordSubmit'

// import  Amplify from 'aws-amplify'
// import config from '../aws-exports'
// Amplify.configure(config)

import UserPosts from '../components/UserPosts'

function Home({ uiState, setUiState, checkUser }) {
 
  const [formState, setFormState] = useState({
    email: '', nickname: '', password: '', authCode: ''
  })
      
  const { email, nickname, password, authCode } = formState

    function onChange(e) {
        setFormState({...formState, [e.target.name] : e.target.value })
    }


    async function signIn() {
        try {
            await Auth.signIn(email, password) 
            checkUser()
            setUiState('signedIn')
            console.log(uiState)
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    async function signUp() {
      try {
          const { user } = await Auth.signUp({
              username : email,
              password,
              attributes: {
                email,
                nickname,
              }
          })
          console.log(user);
          setUiState('confirmSignUp')
      } catch (error) {
          console.log('error signing up:', error);
      }
  }

  async function confirmSignUp() {
      try {
        await await Auth.confirmSignUp(email, authCode)
        await Auth.signIn(email, password)
        setUiState('signedIn')
        checkUser()
      } catch (err) { console.log({ err })}
  
    }

    async function forgotPassword() {
      try {
          await Auth.forgotPassword(email) //username
          setUiState('forgotPasswordSubmit')
      } catch (error) {
          console.log({error})
      }
  }

  async function forgotPasswordSubmit() {
      try {
          await Auth.forgotPasswordSubmit(email, authCode, password)
          setUiState('signIn')
      } catch (error) {
          console.log({error})
      }
  }

  return (
    <>
      <div className="min-h-screen relative w-full flex justify-between">
        <div className="container-fluid w-full flex flex-col items-center justify-between p-6">
          { uiState === 'signedIn' 
            ? (<UserPosts />)          
            : (
                <div className="sm:w-540 mt-12 bg-white py-9 px-12 rounded shadow-lg">
                  {
                    uiState === 'signUp' && (
                      <SignUp onChange={onChange} setUiState={setUiState} signUp={signUp} />
                    )
                  }
                  {
                    uiState === 'confirmSignUp' && (
                      <ConfirmSignUp onChange={onChange} setUiState={setUiState} confirmSignUp={confirmSignUp}/>
                    )
                  }
                  {
                    uiState === 'signIn' && (
                      <SignIn  onChange={onChange} setUiState={setUiState} signIn={signIn}/>
                    )
                  }
                  {
                    uiState === 'forgotPassword' && (
                      <ForgotPassword  onChange={onChange} setUiState={setUiState} forgotPassword={forgotPassword} />
                    )
                  }
                  {
                    uiState === 'forgotPasswordSubmit' && (
                      <ForgotPasswordSubmit  onChange={onChange}  forgotPasswordSubmit={forgotPasswordSubmit}/>
                    )
                  }                    
              </div>
            )}
        </div>
      </div>
      </>
  )

}

export default Home