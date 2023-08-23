import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Registrarse from './components/Registrarse/Registrarse'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registrarse />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App
