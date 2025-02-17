import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "12" }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")

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
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.id}>{person.name} {person.number}</p>
      )}
    </div>
  )

}

export default App



