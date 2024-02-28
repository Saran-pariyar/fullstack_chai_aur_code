import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    console.log(response.data);
    setJokes(response.data)
  }).catch((error)=>{
    console.log(error);
  })
}, []) 

  return (
    <>
  <h1>Code</h1>
  {/* <h1>{jokes.name}</h1> */}
  <p>{jokes.length}</p>

    </>
  )
}

export default App
