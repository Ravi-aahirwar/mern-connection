import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const url = "https://mern-connection-server.vercel.app"

  useEffect(()=>{
    fetch(`${url}/api/data`).then(res => res.json()).then(db => setData(db))
    .catch((error) => {
      alert(error.message)
    })
  },[])


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        {data.length <=1 && <h2>Loading...</h2>}
        {data.map(({id, name, description, value, isActive})=>(
          <ul key={id} >
            <li> Name : {name}  </li>
            <li> Description : {description} </li>
            <li> Value : {value} : isActive : {isActive} </li>
          </ul>
        ))}
      </div>
    </>
  )
}

export default App
