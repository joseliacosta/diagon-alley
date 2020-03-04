import React from 'react'

const Filter = props => {
  return (
    <select onChange={props.onChange}>
      <option value='gryffindor'>Gryffindor</option>
      <option value='hufflepuff'>Hufflepuff</option>
      <option value='ravenclaw'>Ravenclaw</option>
      <option value='slytherin'>Slytherin</option>
    </select>
  )
}

export default Filter
