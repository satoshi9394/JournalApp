import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../../actions/notes';

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const {active: note} = useSelector(state => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(note))
  };

  return (
    <div className="notes__appbar">
      <span>28 de agosto del 2020</span>
      <div>
        <button className="btn">
          picture
        </button>
        <button 
          className="btn"
          onClick={ handleSave }
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default NotesAppBar
