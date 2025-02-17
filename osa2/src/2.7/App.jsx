import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  console.log(persons)

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: String(persons.length + 1)
    }

    const alreadyAdded = persons.find(person => person.name.toUpperCase() === newName.toUpperCase())
    alreadyAdded ? alert(`${newName} is already added to phonebook`)
    : setPersons(persons.concat(nameObject))
    
    setNewName("")
  }

  const handleNameChange = (event) => {
    console.log("handle", event.target.value)
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.id}>{person.name}</p>
      )}
    </div>
  )

}

export default App



