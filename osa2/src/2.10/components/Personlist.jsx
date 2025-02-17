import React from 'react'
import Person from './Person'

export default function Personlist({ persons }) {
  return (
    <div>
    {persons.map(person => 
        <Person key={person.id} person={person}> </Person>
      )}
    </div>
  )
}
