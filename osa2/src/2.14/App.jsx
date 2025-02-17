import { useState, useEffect } from 'react'
import Form from './components/Form'
import Personlist from './components/Personlist'
import axios from 'axios'
import personService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "12" }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
       setPersons(response)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }

    const alreadyAdded = persons.find(person => person.name.toUpperCase() === newName.toUpperCase())
    alreadyAdded ? alert(`${newName} is already added to phonebook`)
    : personService
      .create(nameObject)
      .then(response => {
        setPersons(persons.concat(response))
      })
      .catch(error => {
        console.log("Error in adding new name", error)
      }
      )
    
    setNewName("")
    setNewNumber("")
  }

  const deletePerson = (id, name) => {
    if(window.confirm("Delete " + name + "?")) {
      personService
        .deletePerson(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
        })
      
  }
}

  const handleNameChange = (event) => {
    console.log("handle", event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log("number change", event.target.value)
    setNewNumber(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <Form 
      addName={addName}
      newName={newName}
      newNumber={newNumber}
      handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Personlist persons={persons} deletePerson={deletePerson}/>
    </div>
  )

}

export default App