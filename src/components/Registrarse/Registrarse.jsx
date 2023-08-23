import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import rubros from "./Rubros";
import { useState } from "react";
import axios from "axios";
const Registrarse = () => {
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
    e.preventDefault()
    await axios.post("http://localhost:3001/login", form).then((res) => {
      if(res) console.log(res); 
    })
  };

  return (
    <section className="flex items-center h-screen">
      <article className="h-full w-6/12 bg-blue-600"></article>
      <article className="h-full w-6/12 flex flex-col justify-center bg-blue-200">
        <div className="px-20 flex flex-col gap-6">
          <div className="">
            <h2>Registrate</h2>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <FloatingLabel
              controlId="floatingInput"
              label="Correo Electrónico"
              className="mb-3"
            >
              <Form.Control
                value={form.email}
                name="email"
                type="email"
                placeholder="name@example.com"
                onChange={handleChange}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Nombre Completo">
              <Form.Control
                value={form.username}
                name="username"
                type="text"
                placeholder="Nombre Completo"
                onChange={handleChange}
              />
            </FloatingLabel>
            <Form.Select
              value={form.rubro}
              name="rubro"
              aria-label="Floating label select example"
              onChange={handleChange}
            >
              <option>Open this select menu</option>
              {rubros?.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </Form.Select>
            <FloatingLabel controlId="floatingInput" label="Contraseña">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </FloatingLabel>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 px-10 py-2 rounded w-full"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Registrarse;
