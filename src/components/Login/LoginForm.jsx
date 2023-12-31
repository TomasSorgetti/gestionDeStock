import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setActive }) => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/login/validate",
        form
      );
      if (res.status !== 200) {
        throw new Error("Error login");
      }
      const token = res?.headers["auth-token"]
      localStorage.setItem("token", token)
      if(token)navigate("/home")
    } catch (error) {
      console.log(error);
    }
  };
  const activeChange = (event) => {
    const { value } = event.target
    value === "register" ? setActive("register") : setActive("forgot") 
  }
  return (
    <article className="h-full w-6/12 flex flex-col justify-center bg-white">
      <div className="px-20 flex flex-col gap-6 w-11/12 mx-auto">
        <h2 className="text-primaryColor font-bold text-[30px]">
          Inicia sesión o registrate
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Correo Electrónico"
              className="text-inputTextColor"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={form.email}
                name="email"
                onChange={handleChange}
                className="text-inputBorderColor"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Contraseña"
              className="text-inputTextColor"
            >
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={form.password}
                name="password"
                onChange={handleChange}
                className="text-inputBorderColor"
              />
            </FloatingLabel>
          </div>
          <div className="w-full flex flex-col items-center gap-2 justify-center">
            <button
              type="submit"
              className="bg-primaryColor px-10 py-3 text-white rounded w-8/12 font-bold text-[16px]"
            >
              Entrar
            </button>
            <button 
              value="forgot"
              type="button"
              onClick={activeChange}
            >
            <p className="text-primaryColor text-[18px] font-medium hover:underline">
              ¿Olvidaste la contraseña?
            </p>
            </button>
          </div>
          <p className="text-center text-textColor">
            ¿Eres nuevo/a?{" "}
            <button
              value="register"
              type="button"
              onClick={activeChange}
              className="font-medium text-primaryColor cursor-pointer"
            >
              Registrate
            </button>
          </p>
        </form>
      </div>
    </article>
  );
};

export default LoginForm;
