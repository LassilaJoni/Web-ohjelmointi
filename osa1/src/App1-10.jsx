import { useState } from 'react'

const StatisticLine  = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
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
      <StatisticLine onClick={() => setGood(good + 1)} text="good" />
      <StatisticLine onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <StatisticLine onClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      {good || neutral || bad ? (

        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}

export default App