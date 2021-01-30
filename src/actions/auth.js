import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from '../types/types';

export const startLogingEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch( login(123, 'angel') )
    }, 3500);
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup( googleAuthProvider )
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