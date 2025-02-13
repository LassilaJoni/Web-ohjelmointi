import React from 'react'
import Part from './Part'

export default function Content ({ parts }) {
    return (
      <div>
        {parts.map(part => (
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    )
  }
