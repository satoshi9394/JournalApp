import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from '../types/types';

export const startLogingEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch( login(123, 'angel') )
    }, 3500);
  }
}

export const startRegisterWithEmailPassword = (email, password, name) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( async ({user}) => {
        await user.updateProfile({ displayName: name});
        console.info(user)
        dispatch(
          login(user.uid, user.displayName)
        )
      })
      .catch( e => {
        console.error('msgError:', e)
      })
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