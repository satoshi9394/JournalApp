import React from 'react'

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div 
        className="journal__entry-pricture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://i.imgur.com/IkGT0xU.jpeg)'
        }}
      >
      </div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Un nuevo dia
        </p>
        <p className="journal__entry-content">
          lorsdaytdajtfsjfysyfsdfd sdgdgfjnh dfsdgyhdrf rfgdfhjdfgjdfg
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}

export default JournalEntry
