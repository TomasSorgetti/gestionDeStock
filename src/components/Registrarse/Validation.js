export const Validation = (form) => {
    const error = {}
    const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[-.&]).{6,}$/;
    if(!regexPassword.test(form.password)) error.password = "Ponga una contraña segura"
    return error
}