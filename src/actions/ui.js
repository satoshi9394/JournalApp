import Swal from 'sweetalert2';
import { types } from '../types/types';

export const setError = ( err ) => {
  return (dispatch) => {
    Swal.fire('Error', err, 'error');
    dispatch(setErroState);
  }
}

export const setErroState = (err) => {
  return {
    type: types.uiSetError,
    payload: err
  }
}

export const removeError = () => {
  return{
    type: types.uiRemmoveError
  }
}

export const startLoading = () => {
  return {
    type: types.uiStartLoading
  }
}

export const finishLoading = () => {
  return {
    type: types.uiFinishLoading
  }
}