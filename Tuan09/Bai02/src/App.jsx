import { useState } from 'react'

import ToDoList from './components/ToDoList'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDoList></ToDoList>
    </>
  )
}

export default App
