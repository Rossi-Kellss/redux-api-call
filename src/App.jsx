import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllData } from './features/userSlice'


import './App.css'

function App() {
  const dispatch=useDispatch();
  const data=useSelector((state)=>{return state.app})


  
  

  return (
    <>
      <div>
        <button onClick={()=>{dispatch(getAllData())}}>Click here to fetch data</button>
        {data.users.map((value,index)=>{
          return(<li key={index}>{value.login}</li>)
          console.log(value)

        })}
      </div>
    </>
  )
}

export default App
