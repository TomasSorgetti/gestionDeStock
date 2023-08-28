import Logo from "../../assets/Logo.png";
import LoginForm from "../../components/Login/LoginForm";
import { RecoverPassword } from "../../components/RecoverPassword/RecoverPassword";
import Registrarse from "../../components/Registrarse/Registrarse";
import { useState } from "react";
const Login = () => {
    const [active, setActive] = useState("login");
    
  return (
    <section className="flex items-center h-screen font-sfPro">
      <article className="relative h-full w-6/12 bg-primaryColor flex flex-col items-center justify-center">
        <img className="w-6/12" src={Logo} alt="logo" />
        <div className="absolute bottom-6 w-full text-center">
          <p className="text-[30px] font-bold text-white">
            Tené el control de tu negocio
          </p>
        </div>
      </article>
      {active === "login" && <LoginForm setActive={setActive} />}
      {active === "register" && <Registrarse />}
      {active === "forgot" && <RecoverPassword />}
    </section>
  );
};

export default Login;
