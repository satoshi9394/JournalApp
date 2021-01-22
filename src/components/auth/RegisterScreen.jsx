import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Registro</h3>
      <form>
        <input
          type="name"
          placeholder="Nombre"
          name="name"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
        />
        <input
          type="password"
          placeholder="Confirma Password"
          name="password2"
          className="auth__input"
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
