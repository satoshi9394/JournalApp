import React from 'react';
import { useSelector } from 'react-redux';
import JournalEntry from './JournalEntry';

const JorunalEntris = () => {

  const { notes } = useSelector(state => state.notes);

  console.info(notes);

  return (
    <div className="journal__entries">
      {
        notes.map( note => (
          <JournalEntry 
            key={ note.id }
            {...note}
          />
        ))
      }
    </div>
  )
}

export default JorunalEntris
