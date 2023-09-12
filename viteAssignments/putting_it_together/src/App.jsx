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
      initialAge = {45}
      />
      <PersonCard 
      lastName={"Smith"}
      firstName={"John"}
      initialAge={88}
      />
      <PersonCard
      lastName={"Fillmore"}
      firstName={"Millard"}
      initialAge={50}
      />
      <PersonCard 
      lastName={"Smith"}
      firstName={"Maria"}
      initialAge={62}
      />
    </>
  )
}

export default App
