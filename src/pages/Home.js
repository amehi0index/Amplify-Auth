// import { useState } from 'react'
// import { Auth } from 'aws-amplify'
// import SignIn from '../components/auth/signin/SignIn'
// import SignUp from '../components/auth/signup/SignUp'

// import ConfirmSignUp from '../components/auth/signup/ConfirmSignUp'
// import ForgotPassword from '../components/auth/signin/ForgotPassword'
// import ForgotPasswordSubmit from '../components/auth/signin/ForgotPasswordSubmit'

import  Amplify from 'aws-amplify'
import config from '../aws-exports'
import AllPosts from '../components/posts/AllPosts'
Amplify.configure(config)

function Home({ uiState, setUiState, checkUser }) {
 
  return (
    <AllPosts />
  )

}
export default Home
