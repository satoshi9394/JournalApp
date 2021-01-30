import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import useForm from '../../hooks/useForm';

const RegisterScreen = () => {

  const [ formValues, handleInputChange , reset] = useForm({
    name: 'Angel',
    email: 'usuario1@gmail.com',
    password: '123456',
    password2: '123456'
  });

  const { name, email, password, password2 } = formValues

  const handleRegister = (e) => {
    e.preventDefault();
    if( isFormValid()) {
      console.log('Formulario correcto')
    }
    
  }

  const isFormValid = () => {
    if( name.trim().length === 0){
      console.log('nombre es requerido')
      return false;
    } else if(!validator.isEmail(email)) {
      console.log('el email no es valido')
      return false;
    } else if( password.length <= 5) {
      console.log('se necesita un password mayor a 6 caracters')
      return false;
    } else if ( password !== password2 ) {
      console.log('el password de confirmacion es diferente del password')
      return false;
    }
    return true;
  }

  return (
    <>
      <h3 className="auth__title">Registro</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">
          hola mundo
        </div>
        <input
          type="name"
          placeholder="Nombre"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirma Password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary btn-block mb-5"
          type="submit"
          disabled={ false }
        >
          Registrate
        </button>
        <Link to="/auth/login" className="link">
          Ya estas registrado?
        </Link>
      </form>
    </>
  )
}

export default RegisterScreen
