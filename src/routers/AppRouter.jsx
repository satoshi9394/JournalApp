import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { auth } from '../firebase/firebaseConfig';
import { login } from '../actions/auth';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {

  const dispatch = useDispatch();
  const [ checking, setchecking ] = useState(true);
  const [ isLoggedIn, setisLoggedIn ] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged( (user) => {
      if (user?.uid) {
        dispatch( login( user.uid, user.displayName ));
        setisLoggedIn(true);
      } else {
        setisLoggedIn(false);
      }
      setchecking(false);
    });
  }, [dispatch, setchecking, setisLoggedIn]);

  if (checking) {
    return (
      <h1>Espere...</h1>
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={ AuthRouter }/>
          <Route exact path="/" component={ JournalScreen }/>
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
