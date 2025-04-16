import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Header from './components/Header'

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
            
          </div>

        </div>
      </div>
    </>
  )
}

export default App
