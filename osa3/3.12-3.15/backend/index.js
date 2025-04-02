require('dotenv').config()
const express = require("express")
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

// Logging, JSON parsing, and CORS should come first:
app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())

const Person = require("./models/person")


app.get("/api/persons", (request, response, next) => {
  Person.find({}).then(notes => {
    response.json(notes)
  })
})

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) response.json(person)
      else response.status(404).end()
    })
    .catch(error => next(error))
})

app.get("/info", (request, response, next) => {
  Person.countDocuments({})
    .then(count => response.send(`Phonebook has info for ${count} people <br> ${new Date()}`))
    .catch(error => next(error))
})

app.post("/api/persons", (request, response, next) => {
  const body = request.body
  if (!body.name || !body.number) {
    return response.status(400).json({ error: "name or number missing" })
  }
  const person = new Person({
    name: body.name,
    number: body.number
  })
  person.save()
    .then(savedPerson => response.json(savedPerson))
    .catch(error => next(error))
})

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then(() => response.status(204).end())
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: "malformatted id" })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

