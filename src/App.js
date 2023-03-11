import React, { useState, useEffect } from 'react'
import './App.css'
const App = () => {
  const [count, setCount] = useState(10)
  useEffect(() => {
    let timerId = setTimeout(() => setCount(count - 1), 1000)
    console.log(count)
    if (count === 0) clearTimeout(timerId)
  }, [count])

  return (
    <div className='App-header'>
      <center>
        <p className='count'>{count}</p>
      </center>
    </div>
  )
}

export default App
