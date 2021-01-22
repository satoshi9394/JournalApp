import React from 'react'

const LoginScreen = () => {
  return (
    <>
      <h3>Login</h3>
      <form>
        <input
          type="email"
          placeholder="email"
          name="email"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
        />
        <button
          type="submit"
        >
          Ingresar
        </button>
        <hr/>
        google
      </form>
    </>
  )
}

export default LoginScreen
