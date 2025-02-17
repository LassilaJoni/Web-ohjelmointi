import React from 'react'
import Person from './Person'

export default function Personlist({ persons, deletePerson }) {
  console.log("persons", persons)
  return (
    <>
    {persons.map(person => 
    <>
        <Person person={person}> </Person>  
        <button onClick={() => deletePerson(person.id, person.name)}>delete</button>
        
        </>
      )}
    </>
  )
}
