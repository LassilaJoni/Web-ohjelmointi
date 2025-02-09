import React from 'react'
import Part from './Part'

export default function Content ({ parts }) {
  const total = parts.reduce((a, part) => a + part.exercises, 0);

console.log("total", total)
    return (
      <div>
        {parts.map(part => (
            <Part key={part.id} name={part.name} exercises={part.exercises}/>
        ))}
        <p><b>Total of {total} exercises</b></p>
      </div>
    )
  }
