import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';
import validator from 'validator';
import useForm from '../../hooks/useForm';
import { startRegisterWithEmailPassword } from '../../actions/auth';

const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.ui);

  const [ formValues, handleInputChange] = useForm({
    name: 'Angel',
    email: 'usuario1@gmail.com',
    password: '123456',
    password2: '123456'
  });

  const { name, email, password, password2 } = formValues

  const handleRegister = (e) => {
    e.preventDefault();
    if( isFormValid()) {
      dispatch(startRegisterWithEmailPassword( email, password, name ));
    }
    
  }

  const isFormValid = () => {
    if( name.trim().length === 0){
      dispatch( setError('Nombre requerido') );
      return false;
    } else if(!validator.isEmail(email)) {
      dispatch( setError('Email no valido') );
      return false;
    } else if( password.length <= 5) {
      dispatch( setError('Password muy corto') );
      return false;
    } else if ( password !== password2 ) {
      dispatch( setError('El password de confirmacion es diferente del password') );
      return false;
    }
    dispatch(removeError());
    return true;
  }

  return (
    <>
      <h3 className="auth__title">Registro</h3>
      <form onSubmit={handleRegister}>
        {
          msgError &&
          (
            <div className="auth__alert-error">
              { msgError }
            </div>
          )
        }
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
