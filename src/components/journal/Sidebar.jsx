import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import JorunalEntris from './JorunalEntris'

const Sidebar = () => {

  const { name } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => (dispatch(startLogout()));

  const handleAddNew = () => {
    dispatch( startNewNote() );
  }

  return (
    <aside className="joirnal__sidebar">
      <div className="joirnal__sidebar-navbar">
        <h3 className="mt-5">
        <i  className="far fa-moon"></i>
          <span> { name } </span>
        </h3>
        <button 
          className="btn"
          onClick={ handleLogout }
        >
          logout
        </button>
      </div>
      <div 
        className="journal__new-entry"
        onClick={ handleAddNew }
      >
        <i className="fa fa-calendar-plus fa-5x"></i>
        <p className="mt-5">
          New entry
        </p>
      </div>
      <JorunalEntris/>
    </aside>
  )
}

export default Sidebar
