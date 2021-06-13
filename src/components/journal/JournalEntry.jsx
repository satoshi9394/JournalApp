import React from 'react';
import format from 'date-fns/format';

const JournalEntry = ({ id, date, title, body, url }) => {

  const noteDayName = format(date, 'iiii');
  const noteDayNum = format(date, 'do');

  return (
    <div className="journal__entry pointer">
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
