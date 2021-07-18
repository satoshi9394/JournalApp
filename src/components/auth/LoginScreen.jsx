import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { startLogingEmailPassword, startGoogleLogin } from '../../actions/auth'
import { removeError, setError } from '../../actions/ui'
import useForm from '../../hooks/useForm'

const LoginScreen = () => {

  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.ui);

  const [ formValues, handleInputChange , reset] = useForm({
    email: 'usuario1@gmail.com',
    password: '123456'
  });

  const { email, password } = formValues

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch( startLogingEmailPassword(email, password) );
      reset();
    }
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  const isFormValid = () => {
    if(!validator.isEmail(email)) {
      dispatch( setError('Email no valido') );
      return false;
    } else if( password.length <= 5) {
      dispatch( setError('Password muy corto') );
      return false;
    }
    dispatch(removeError());
    return true;
  }

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form 
        onSubmit={handleLogin}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={ handleInputChange }
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={ handleInputChange }
        />
        <button
          className="btn btn-primary btn-block"
          type="submit"
          disabled={ loading }
        >
          Ingresar
        </button>
        <div className="auth__social-networks">
          <p>Ingresa con una red social</p>
          <div 
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">
          Crea una nueva cuenta
        </Link>
      </form>
    </>
  )
}

export default LoginScreen
