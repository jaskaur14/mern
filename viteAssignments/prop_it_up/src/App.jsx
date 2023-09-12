import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard';

function App() {

  return (
    <>
      <PersonCard 
      lastName={"Doe"}
      firstName={"Jane"}
      age={45}
      hairColor={"Black"}
      />
      <PersonCard 
      lastName={"Smith"}
      firstName={"John"}
      age={88}
      hairColor={"Brown"}
      />
      <PersonCard
      lastName={"Fillmore"}
      firstName={"Millard"}
      age={50}
      hairColor={"Brown"}
      />
      <PersonCard 
      lastName={"Smith"}
      firstName={"Maria"}
      age={62}
      hairColor={"Brown"}
      />
    </>
  )
}

export default App
