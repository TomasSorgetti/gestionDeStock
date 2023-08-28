export const Validation = (form) => {
    const error = {}
    const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[-.&]).{6,}$/;
    if(!form.password) error.password = ""
    else if(!regexPassword.test(form.password)) error.password = "Tu contraseña debe contener una mayuscula, un numero y un simbolo especial"
    else error.password = ""
    return error
}