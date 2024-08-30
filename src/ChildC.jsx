import React from 'react'
import {data,data1} from './App'
import { useContext } from 'react'

function ChildC() {
    const name=useContext(data)
    const gender=useContext(data1)
  return (
    <div>
      <h1> i  am {name} my gender is {gender}</h1>
    </div>
  )
}

export default ChildC
