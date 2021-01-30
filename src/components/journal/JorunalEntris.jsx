import React from 'react'
import JournalEntry from './JournalEntry'

const JorunalEntris = () => {
  const entris = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="journal__entries">
      {
        entris.map( value => (
          <JournalEntry key={ value } />
        ))
      }
    </div>
  )
}

export default JorunalEntris
