import { useState } from 'react'

const useForm = (initialStatev = {}) => {

  const [ values, setValues ] = useState(initialStatev);

  const reset = () => {
    setValues( initialStatev )
  }

  const handleInpuntChange = ({target}) => {
    setValues({
      ...values,
      [ target.name ] : target.value
    });
  }

  return [ values, handleInpuntChange, reset]


}

export default useForm;