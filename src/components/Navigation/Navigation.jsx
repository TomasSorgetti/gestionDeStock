import { Link, useNavigate } from "react-router-dom";
import LogoNav from "../../assets/LogoNav.png";

const Navigation = () => {

  const navigate = useNavigate()

  const logaout = () => {
    localStorage.clear()
     navigate('/')
  }

  return (
    <section className="w-full flex justify-between bg-primaryColor py-6 pr-16 pl-20 text-white">
    <Link to="/home" >
      <img src={LogoNav} alt="logo" /></Link>
      <ul className="flex items-center gap-6">
        <li>SUCURSAL 1</li>
        <button onClick={logaout} className="text-white">Salir</button>
        <div className="w-[1px] h-full bg-white"></div>
        <li className="w-10 h-10 rounded-full bg-white">
        </li>
      </ul>
    </section>
  );
};

export default Navigation;
