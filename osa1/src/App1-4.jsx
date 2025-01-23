const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  )
}

const Content = ({ part }) => {
  return (
    <>
 
        <Part part={part[0].name} exercises={part[0].exercises} />
        <Part part={part[1].name} exercises={part[1].exercises} />
        <Part part={part[2].name} exercises={part[2].exercises} />
   
    </>
  )
}

const Total = ({ exercises }) => {
  return (
    <>
      <p>Number of exercises {exercises[0].exercises + exercises[1].exercises + exercises[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part={parts}  />
      <Total exercises={parts} />
    </div>
  )
}



export default App



