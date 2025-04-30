import {useState, useEffect} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  const fetchAndUpdateData = async ()=>{
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchAndUpdateData()
  }, [])

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={()=> setCount(count-1)}>Decrement</button>
      <br/>

      {/* <div>
        {data.map(item =>(
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div> */}

      <div>
        {data.map(item =>(
          <div key={item.id}>
             <h2>{item.title}</h2>
             <p>{item.id}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
