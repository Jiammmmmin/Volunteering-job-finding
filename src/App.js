import {BrowserRouter as Router, Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import Explore from './pages/Explore'
import ForgotPassword from './pages/ForgotPassword'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SignIN from './pages/SignIN'
import SignUP from './pages/SignUP'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
      <Router>
       {/* <Navbar> */}
        <Routes>
          <Route path = '/' element = {<Explore/>}/>
          <Route path = '/offers' element = {<Offers />}/>
          <Route path = '/profile' element = {<SignIN />}/>
          <Route path = '/sign-in' element = {<SignIN />}/>
          <Route path = '/sign-up' element = {<SignUP />}/>
          <Route path = '/forgot-password' element = {<ForgotPassword/>}/>
          
        </Routes> 
        {/* </Navbar> */}
      </Router>
      

      
    </>
  )
}

 export default App
