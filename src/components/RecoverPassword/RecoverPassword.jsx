import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export const RecoverPassword = () => {

  const [recovey, setRecovery] = useState('')

    const handleSubmit = () => {
        alert("Se envio el mensaje")
    }

    const handleChange = (event) => {
      const { value } = event.target
      setRecovery(value)
    }

    console.log(recovey)
  return (
    <article className='h-full w-6/12 flex flex-col justify-center bg-white font-sfPro'>
        <div className='px-20 flex flex-col gap-2 w-11/12 mx-auto text-center'>
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-primaryColor font-bold text-[30px] mb-0">¿Olvidaste tu contraseña?</h2>
            <p className="mb-0 w-[79%] mx-auto text-[18px] font-medium text-textColor">
                Introduce tu correo electronico y te enviaremos
                un enlace para que puedas volver a entrar a tu cuenta
            </p>
          </div>
          
            <form onSubmit={handleSubmit} className="flex flex-col">
            <div className='flex flex-col gap-3'>
                  <FloatingLabel
              controlId="floatingInput"
              label="Correo Electrónico"
              className="text-inputTextColor"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={recovey}
                name="email"
                onChange={handleChange}
                className="text-inputBorderColor"
              />
            </FloatingLabel>
            </div>
            <div className='w-full flex justify-center my-4'>
                <button 
                type='submit'
                className='bg-primaryColor px-10 py-3 text-white rounded w-8/12 font-bold text-[16px]'
                >
                    Enviar
                </button>
            </div>
            </form>
        </div>
    </article>
  )
}
