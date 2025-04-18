import { useState, useEffect } from 'react'
import Form from './components/Form'
import Personlist from './components/Personlist'
import axios from 'axios'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(data => {
        console.log(data);
        setPersons(data);
      });
  }, []);

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

      setMessage(`Added ${newName}`)
      setTimeout(() => {
        setMessage(null)
      }, 3000)
      
    setNewName("")
    setNewNumber("")
  }

  const deletePerson = (id, name) => {
    if(window.confirm("Delete " + name + "?")) {
      personService
        .deletePerson(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
          setMessage(`Deleted ${name}`)
          setTimeout(() => {
            setMessage(null)
          }, 3000)
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
      <Notification message={message} />
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