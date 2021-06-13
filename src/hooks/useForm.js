import { useState } from 'react'

const useForm = (initialStatev = {}) => {

  const [ values, setValues ] = useState(initialStatev);

  const reset = (newFormState = initialStatev) => {
    setValues( newFormState )
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