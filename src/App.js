import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import Home from './pages/Home'
import Navbar from './pages/Navbar'


function App() {

  const [uiState, setUiState] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(()=> {
    checkUser()
    setUiState('signedIn')
  }, [])

  async function checkUser(){
      try {
        const user = await Auth.currentAuthenticatedUser()
        const { email, nickname } = user.attributes
        setUser(()=> nickname ? nickname : email)
        await Auth.currentAuthenticatedUser()
        
        console.log(({ user }))
      } catch (error) {
         setUser(null)
         setUiState('signIn')
      }
  }

  return (
    <>
      <Navbar uiState={uiState} setUiState={setUiState} user={user}  setUser={setUser}/>
      <Home uiState ={uiState} setUiState={setUiState} checkUser={checkUser} />
    </>
  )
}

export default App
