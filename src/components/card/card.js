import React from 'react'
import './card.css'
import Wizard from '../wizard/wizard'

const Card = props => {
  return (
    <section className='card'>
      <Wizard {...props} />
    </section>
  )
}

export default Card
