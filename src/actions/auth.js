import Swal from 'sweetalert2';

import { auth, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';
import { noteLogout } from './notes';

export const startLogingEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    auth.signInWithEmailAndPassword(email, password)
      .then( ({user}) => {
        dispatch(login(user.uid, user.displayName))
        dispatch(finishLoading());
      })
      .catch( e => {
        dispatch(finishLoading());
        Swal.fire('Error', e.message, 'error');
      })
  }
}

export const startRegisterWithEmailPassword = (email, password, name) => {
  return (dispatch) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then( async ({user}) => {
        await user.updateProfile({ displayName: name});
        dispatch(
          login(user.uid, user.displayName)
        )
      })
      .catch( e => {
        Swal.fire('Error', e.message, 'error')
      })
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    auth.signInWithPopup( googleAuthProvider )
      .then( ({user}) => {
        dispatch(
          login(user.uid, user.displayName)
        )
      });
  }
}

export const login = (uid, displayName) => {
  return{
    type: types.login,
    payload: {
      uid,
      displayName
    }
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    try {
      await auth.signOut();
      dispatch( logout() );
      dispatch( noteLogout() );
    } catch (error) {
      console.log(error);
    }
  }
}

export const logout = () => ({
  type: types.logout
});