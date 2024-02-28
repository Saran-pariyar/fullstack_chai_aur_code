import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    
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
  {
    jokes.map((data, index)=>{
      return(<div key={data.id}>
      <p>{data.title}</p>
      <i>{data.content}</i>

      </div>)
    })
  }

    </>
  )
}

export default App
