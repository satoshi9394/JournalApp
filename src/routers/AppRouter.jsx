import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import { useDispatch } from 'react-redux';
import { auth } from '../firebase/firebaseConfig';
import { login } from '../actions/auth';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';

import AuthRouter from './AuthRouter';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

import JournalScreen from '../components/journal/JournalScreen';

const AppRouter = () => {

  const dispatch = useDispatch();
  const [ checking, setchecking ] = useState(true);
  const [ isLoggedIn, setisLoggedIn ] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged( async(user) => {
      if (user?.uid) {
        dispatch( login( user.uid, user.displayName ));
        setisLoggedIn(true);
        const notes = await loadNotes( user.uid );
        dispatch(setNotes(notes));
      } else {
        setisLoggedIn(false);
      }
      setchecking(false);
    });
  }, [dispatch, setchecking, setisLoggedIn]);

  if (checking) {
    return (
      <h1>wait...</h1>
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            path="/auth"
            component={AuthRouter}
            isAuthenticated={ isLoggedIn }
          />
          <PrivateRouter 
            exact
            path="/" 
            component={ JournalScreen }
            isAuthenticated={ isLoggedIn }
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
