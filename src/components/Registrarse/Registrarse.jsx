import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Validation } from "./Validation";
import bcrypt from "bcryptjs"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Registrarse = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [err, setErr] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [passwordVal, setPasswordVal] = useState({password2: ""})


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErr(Validation({ ...form, [name]: value }));
    setPasswordVal({[name]: value});
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedPassword = bcrypt.hashSync(form.password, 10)
    if(form.password === passwordVal.password2){
      try {
        const URL = "http://localhost:3001/login";
        const res = await axios.post(URL, { ...form, password: hashedPassword })
        if (res.status !== 200) throw "error create user"
        const token = res?.headers["auth-token"];
        localStorage.setItem("token", token);
        if (token) navigate("/home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <article className="h-full w-6/12 flex flex-col justify-center bg-white font-sfPro">
      <div className="px-20 flex flex-col gap-6">
        <div className="">
          <h2 className="text-primaryColor mb-0 text-3xl font-bold">
            Bienvenido
          </h2>
          <span className="text-textColor">Complete sus datos</span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <FloatingLabel
            controlId="floatingInput"
            label="Correo Electrónico"
            className="text-inputTextColor"
          >
            <Form.Control
              value={form.email}
              name="email"
              type="email"
              placeholder="name@example.com"
              onChange={handleChange}
              className="text-inputTextColor"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Nombre Completo"
            className="text-inputTextColor"
          >
            <Form.Control
              value={form.username}
              name="username"
              type="text"
              placeholder="Nombre Completo"
              onChange={handleChange}
              className=""
            />
          </FloatingLabel>
          <div className="text-center">
            <FloatingLabel
              controlId="floatingInput"
              label="Contraseña"
              className="text-inputTextColor"
            >
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </FloatingLabel>
            {err ? (
              <span className="text-red-600 text-base">{err.password}</span>
            ) : (
              ""
            )}
          </div>
          <div className="text-center">
            <FloatingLabel
              controlId="floatingInput"
              label="Contraseña"
              className="text-inputTextColor"
            >
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="password2"
                value={passwordVal.password2}
                onChange={handleChange}
              />
            </FloatingLabel>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-primaryColor px-10 py-3 text-white rounded w-8/12 font-bold text-[16px]"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Registrarse;
