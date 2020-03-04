import React from 'react'
import './App.css'
import Card from './components/card/card'
import Navbar from './components/navbar/navbar'
import Filter from './components/filter/filter'

const wizards = [
  {
    name: 'Harry',
    school: 'Hogwarts School of Witchcraft and Wizardry',
    house: 'Gryffindor',
    bloodStatus: 'half-blood',
    dumbledoresArmy: true,
  },
  {
    name: 'Hermione',
    school: 'Hogwarts School of Witchcraft and Wizardry',
    house: 'Gryffindor',
    bloodStatus: 'half-blood',
    dumbledoresArmy: true,
  },
  {
    name: 'Ron',
    school: 'Hogwarts School of Witchcraft and Wizardry',
    house: 'Gryffindor',
    bloodStatus: 'pure-blood',
    dumbledoresArmy: true,
  },
  {
    name: 'Draco',
    school: 'Hogwarts School of Witchcraft and Wizardry',
    house: 'Slytherin',
    dumbledoresArmy: false,
  },
]

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar />
        <Filter
          onChange={() => {
            console.log('Foi')
          }}
        />
      </header>
      <main className='container'>
        {wizards.map(wizard => {
          return <Card key={wizard.name} {...wizard} />
        })}
      </main>
    </div>
  )
}

export default App
