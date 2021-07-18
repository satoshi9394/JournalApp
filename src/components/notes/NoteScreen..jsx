import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import useForm from '../../hooks/useForm';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
  const { active: note } = useSelector(state => state.notes)
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset ] = useForm(note);
  const { body, title } = formValues;
  const activeId = useRef(note.id);

  useEffect(() => {
    const currentNote = note.id !== activeId.current;
    if (currentNote) {
      reset(note);
      activeId.current = note.id
    }

  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, {
      ...formValues
    }));
  }, [formValues, dispatch])

  return (
    <div className="notes__main-content">
      <NotesAppBar/>
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          name='title'
          onChange={handleInputChange}
        />
        <textarea
          placeholder="what happened today?"
          className="notes__textarea"
          value={body}
          name='body'
          onChange={handleInputChange}
        >
        </textarea>
        <div className="notes__image">
          { 
            note.url &&
            <img
              src={note.url}
              alt="sol"
            />
          }
        </div>
      </div>
    </div>
  )
}

export default NoteScreen
