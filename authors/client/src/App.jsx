import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import DisplayAll from './components/DisplayAll'
import Nav from './components/Nav'
import Form from './components/CreateAuthor'
import EditAuthor from './components/EditAuthor'
import OneAuthor from './components/OneAuthor'

function App() {


  return (
    <>
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route index element={ <DisplayAll/> } />
          <Route path="/createAuthor" element={ <Form/> }/>
          <Route path="/authors/:id" element={ <EditAuthor/> } />
          <Route path="/oneAuthor/:id" element={ <OneAuthor/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
