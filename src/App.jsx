import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import Login from './Pages/Login/Login'
import ProtectedRoutes from './components/utils/ProtectedRoutes';
import ProtectedLogin from "./components/utils/ProtectedLogin"



function App() {
  
  return (
    <>
      <Routes>
        <Route element={<ProtectedLogin />}>
        <Route path="/" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
