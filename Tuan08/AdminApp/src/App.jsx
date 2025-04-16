import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'

function App() {


  return (
    <>
      <div>
        <div class="container">
          <div class="header">
            <Header></Header>
          </div>
          <div class="menu">
            <Menu></Menu>
          </div>
          <div class="content">
            <Dashboard></Dashboard>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
