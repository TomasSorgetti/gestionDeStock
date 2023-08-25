import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import rubros from "./Rubros";
import { useState } from "react";
import { Validation } from "./Validation";
const Registrarse = () => {
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

  const formInitial = { ...form };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErr(Validation({ ...form, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <article className="h-full w-6/12 flex flex-col justify-center bg-white">
      <div className="px-20 flex flex-col gap-6">
        <div className="">
          <h2 className="text-primaryColor ">Registrate</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <FloatingLabel
            controlId="floatingInput"
            label="Correo Electrónico"
            className="mb-3 text-inputTextColor"
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
          <Form.Select
            value={form.rubro}
            name="rubro"
            aria-label="Floating label select example"
            onChange={handleChange}
            className="text-inputTextColor"
          >
            <option>Servicios</option>
            {rubros?.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </Form.Select>
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
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-primaryColor px-10 py-2 rounded w-full text-white"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Registrarse;
