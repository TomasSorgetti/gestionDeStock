import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home'
import Login from './components/Login/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App
