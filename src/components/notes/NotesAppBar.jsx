import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';
import format from 'date-fns/format';

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const {active: note} = useSelector(state => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(note))
  };

  const handlePicture = () => {
    document.getElementById('fileSelector').click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if ( file ) {
      dispatch( startUploading(file) );
    }
  }

  const dateNow = Date.now();
  const day = format(dateNow,'dd');
  const month = format(dateNow,'MMM');
  const year = format(dateNow,'yyyy');

  return (
    <div className="notes__appbar">
      <span>{`${month} ${day}, ${year}`}</span>
      <input 
        id="fileSelector"
        type="file"
        style={{ display: 'none'}}
        name="files"
        onChange={ handleFileChange }
      />
      <div>
        <button 
          className="btn"
          onClick={handlePicture}
        >
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
