import './App.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

const Home = (props) =>{
  return (
  <div>
      <h1>Welcome!</h1>
  </div>
  )
}

const Params = (props) =>{
  const { word, color, backgroundColor } = useParams();
  return (
    <div>
      {
        isNaN(word)?
          <p style={
            color? 
            {color: color, backgroundColor: backgroundColor}
            :null
          }>
            This is a word: {word}
          </p>
          :
          <p>
            This is a number: {word}
          </p>
      }

    </div>
  )
}

function App() {

  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route element={<Params />} path="/:word" />
        <Route element={<Params />} path="/:word/:color/:backgroundColor" />

      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App
