import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <h1>Wizards'World</h1>
      <label>Sort by Hogwart's house</label>
      <select>
        <option>Gryffindor</option>
        <option>Hufflepuff</option>
        <option>Ravenclaw</option>
        <option>Slytherin</option>
      </select>
    </nav>
  )
}

export default Navbar
