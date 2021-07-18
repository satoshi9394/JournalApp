import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from '../types/types';
import { fileUpload } from '../helpers/fileUpload';
import Swal from 'sweetalert2'

const BASE_URL_NOTE= '/journal/notes/';

export const startNewNote = () => {
  return  async(dispatch,  getState ) => {
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    const doc = await db.collection(`${ uid }${BASE_URL_NOTE}`).add( newNote );
    dispatch( activeNote(doc.id, newNote ));
    dispatch(addNewNote(doc.id, newNote))
  }
}

export const startLoadingNotes = ( uid ) => {
  return async ( dispatch ) => {
    const notes = await loadNotes( uid );
    dispatch(setNotes(notes));
  }
}

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  }
});

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note
  }
});

export const setNotes = ( notes ) => ({
  type: types.notesLoad,
  payload: notes
});

export const startSaveNote = (note) => {
  return async(dispatch, getState) => {
    const { uid } = getState().auth;
    if (!note.url) {
      delete note.url;
    }
    const noteToFirestore = {...note};
    delete noteToFirestore.id;
    const urlToFirestore = `${uid}${BASE_URL_NOTE}${note.id}`;
    try {
      await db.doc(urlToFirestore).update(noteToFirestore);
      dispatch( refreshNote(note.id, noteToFirestore));
      Swal.fire('Saved', note.title, 'success');
    } catch (error) {
      Swal.fire('Error', error, 'error');
    }

  }
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdate,
  payload: {
    id,
    note: {
      id,
      ...note
    }
  }
});

export const startUploading = (file) => {
  return async ( dispatch, getState ) => {
    const {active: activeNote } = getState().notes;
    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait...',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;
    dispatch(startSaveNote(activeNote))
    Swal.close();
  }
}

export const startDeleting = (id) => {
  return async(dispatch, getState) => {
    const uid = getState().auth.uid;
    await db.doc(`${uid}/journal/notes/${id}`).delete();
    dispatch(deleteNote(id));
  }
}

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id
});

export const noteLogout = () => ({
  type: types.notesLogoutCleaning
});
