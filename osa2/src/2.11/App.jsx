import { useState, useEffect } from 'react'
import Form from './components/Form'
import Personlist from './components/Personlist'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "12" }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
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
    : setPersons(persons.concat(nameObject))

    setNewName("")
    setNewNumber("")
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
      <Personlist persons={persons} />
    </div>
  )

}

export default App



