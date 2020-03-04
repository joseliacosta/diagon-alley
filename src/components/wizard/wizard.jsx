import React from 'react'
import House from '../house/house'
import './wizard.css'
import PropTypes from 'prop-types'

const Wizard = props => {
  const { name, school, house, dumbledoresArmy } = props
  const hogwartsName = 'Hogwarts School of Witchcraft and Wizardry'
  return (
    <>
      <h1>{name}</h1>

      {school === hogwartsName ? (
        <House house={house} />
      ) : (
        <img
          alt='Harry Potter Logo'
          src='https://www.pngfind.com/pngs/m/113-1138851_hp-logo-png-hp-harry-potter-transparent-png.png'
        />
      )}
      <p>
        {dumbledoresArmy ? `Dumbledore Army` : `Not part of Dumbledore Army`}
      </p>
    </>
  )
}

Wizard.propTypes = {
  name: PropTypes.string.isRequired,
  school: PropTypes.string,
  house: PropTypes.string,
  dumbledoresArmy: PropTypes.bool,
}
export default Wizard
