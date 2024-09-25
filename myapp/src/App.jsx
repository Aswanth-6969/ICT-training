import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Count from './components/Count'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Welcome People</h1> */}
      <Navbar />
      <Routes>
        <Route path='/l' element={<Login />} />
        <Route path='/s' element={<Signup />} />
        <Route path='/state' element={<StateBasics />} />
        <Route path='/count' element={<Count />} />
        <Route path='/api' element={<Api />} />
        <Route path='/pokemon' element={<Pokemon />} />
      </Routes>
      
    </>
  )
}

export default App
