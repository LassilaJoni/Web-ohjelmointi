import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const reviews = good + neutral + bad
  return (
  <>
  <p>Good: {good}</p>
  <p>Neutral: {neutral}</p>
  <p>Bad: {bad}</p>
  <p>All: {reviews}</p>
  <p>Average: {((good - bad) / reviews)}</p>
  <p>Positive: {(good / reviews) * 100}%</p>


  </>
  )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
  )
}

export default App