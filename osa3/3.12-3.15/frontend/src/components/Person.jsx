import React from 'react'

export default function Person({ person }) {
  return (
    <div>
        <p>{person.name} {person.number}</p>
    </div>
  )
}
