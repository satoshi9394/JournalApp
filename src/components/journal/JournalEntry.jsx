import React from 'react';
import format from 'date-fns/format';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

const JournalEntry = ({ id, date, title, body, url }) => {

  const dispatch = useDispatch();

  const noteDayName = format(date, 'iiii');
  const noteDayNum = format(date, 'do');

  const handleEntryClick = () => {
    const note = {
      date,
      title,
      body,
      url
    };
    dispatch(activeNote(id, note));
  }

  return (
    <div 
      className="journal__entry pointer"
      onClick={ handleEntryClick }
    >
      {
        url &&
        <div 
          className="journal__entry-pricture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${ url })`
          }}
        >
        </div>
      }
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          {title}
        </p>
        <p className="journal__entry-content">
          {body}
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span> {noteDayName} </span>
        <h4>{ noteDayNum }</h4>
      </div>
    </div>
  )
};

export default JournalEntry
