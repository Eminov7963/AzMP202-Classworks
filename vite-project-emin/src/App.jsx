import { useState } from 'react'
import './App.css'

function App() {
  const [students, setStudent] = useState([])

  return (
    <>
      <Form students = {students} setStudent = {setStudent}/>
    </>
  )
}

export default App
