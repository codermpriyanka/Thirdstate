
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './ChildA'
import { createContext } from 'react'

const data=createContext();
const data1=createContext();

function App() {
  const name="priyanka"
  const gender="female"
  return (
    <>
    <data.Provider value={name}>
      <data1.Provider value={gender}>
      <ChildA></ChildA>
      </data1.Provider>
    </data.Provider>
   
    </>
  )
}

export default App
export {data,data1}
