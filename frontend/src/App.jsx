import './App.css'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from "./pages/signup"
import { Routes,Route,Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/auth_context'
function App() {
  const { authUser } = useAuthContext();
  return (
    <div id="app" className='p-4 h-screen flex items-center justify-center'>
      <Routes>
            <Route path="/" element={authUser?<Home/>:<Navigate to={"/login"}/>}/>
            <Route path="/login" element={authUser?<Navigate to={"/"}/>:<Login/>}/>
            <Route path="/signup" element={authUser?<Navigate to={"/"}/>:<SignUp/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
