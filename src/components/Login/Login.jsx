import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center h-screen">
      <article className="h-full w-6/12 bg-blue-600"></article>
      <article className="h-full w-6/12 flex flex-col justify-center bg-blue-200">
        <div className="px-20 flex flex-col gap-6">
          <div className="">
            <h2>
              Inicia sesión o <Link to="/register">registrate</Link>
            </h2>
          </div>
          <span>Ingresa tus datos</span>
          <div>
            <FloatingLabel
              controlId="floatingInput"
              label="Correo Electrónico"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Contraseña">
              <Form.Control type="password" placeholder="Contraseña" />
            </FloatingLabel>
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-blue-600 px-10 py-2 rounded w-full">
              Entrar
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Login;
