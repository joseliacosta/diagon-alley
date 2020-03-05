import React, { useState } from 'react'
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

const App = ()=> {

  const [filteredWizards, setFilter] = useState(wizards)

  const onFilterHouse = (houseName) => {
    const filteredList = wizards.filter((wizard) =>  wizard.house.toLowerCase() === houseName)
    setFilter(filteredList)
  }

  return (
    <div className='App'>
      <header>
        <Navbar />
        <Filter
          onChange={onFilterHouse}
        />
      </header>
      <main className='container'>
        {filteredWizards.map(wizard => {
          return <Card key={wizard.name} {...wizard} />
        })}
      </main>
    </div>
  )
}

export default App
