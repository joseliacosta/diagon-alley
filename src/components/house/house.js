import React from 'react'
import PropTypes from 'prop-types'

const houseSelector = houseName => {
  switch (houseName) {
    case 'Gryffindor':
      return 'https://vignette.wikia.nocookie.net/harrypotter/images/0/06/G_final_%281%29.jpg/revision/latest?cb=20121116012731&path-prefix=pt-br'
    case 'Slytherin':
      return 'https://vignette.wikia.nocookie.net/harrypotter/images/d/da/S_final.jpg/revision/latest?cb=20120927162347&path-prefix=pt-br'
    case 'Hufflepuff':
      return 'https://vignette.wikia.nocookie.net/harrypotter/images/3/3f/H_final.jpg/revision/latest?cb=20121101125148&path-prefix=pt-br'
    case 'Ravenclaw':
      return 'https://vignette.wikia.nocookie.net/harrypotter/images/0/07/Ravenclaw_%28S%C3%ADmbolo_Corvinal%29.png/revision/latest?cb=20170324224938&path-prefix=pt-br'

    default:
      return 'https://vignette.wikia.nocookie.net/harrypotter/images/7/7b/250px-Hogwartscrest.png/revision/latest?cb=20121119233851&path-prefix=pt-br'
  }
}
const House = props => {
  const { house } = props

  return (
    <>
      <h3>Student from {house}</h3>
      <img alt={`${house}'s logo`} src={houseSelector(house)} />
    </>
  )
}

House.propTypes = {
  house: PropTypes.string.isRequired,
}

export default House
