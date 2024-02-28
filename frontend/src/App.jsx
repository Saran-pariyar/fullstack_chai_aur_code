import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState({})

useEffect(()=>{
  axios.get('http://localhost:3000/jokes')
  .then((response)=>{
    setJokes(response.data)
  }).catch((error)=>{
    console.log(error);
  })
})

  return (
    <>
  <h1>Chai Aur Code</h1>
  <p>{jokes.name}</p>

    </>
  )
}

export default App
