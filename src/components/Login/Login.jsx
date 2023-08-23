import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <section className="">
        <article>
              
      </article>
      <article>
        <h2>Inicia sesión o registrate</h2>
        <span>Ingresa tus datos</span>
        <div>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <div>
            <button>
                Entrar
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Login;
