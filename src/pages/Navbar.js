
import Greeting from '../components/Greeting'

function Navbar({ uiState, setUiState, user, setUser }) {
    return (
      <nav className="relative w-full flex  items-center justify-between bg-gradient-to-r from-teal-600 p-6">

        <div className="container-fluid w-full flex  items-center justify-between px-6">

          <div className="container-fluid w-full flex items-center justify-between">

            <div class="flex items-center flex-shrink-0 text-white mr-6">
              <span class="font-semibold text-xl">NotReddit</span>
            </div>
            {
              uiState === ('signedIn') && ( 
                <Greeting user={user} setUser={setUser} setUiState={setUiState} />
              )
            }
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar
  