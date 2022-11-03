import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Hello} from './Hello'

function App() {
  const [count, setCount] = useState(0)

//  const click100 = () => {
//    let i = 0;
//    const intl = setInterval(()=>{
//      i += 1;
//      setCount(count + i);
//
//      if (i === 100) clearInterval(intl);
//    } , 0);
// }

  return (
    <div className="App">
      <Hello></Hello>
     
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
//<button onClick={(})
export default App
