import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllData } from './features/userSlice'


import './App.css'

function App() {
  const dispatch=useDispatch();
  const data=useSelector((state)=>console.log(state));

  
  

  return (
    <>
      <div>
        <button onClick={()=>{dispatch(getAllData())}}>Click here to fetch data</button>
      </div>
    </>
  )
}

export default App
