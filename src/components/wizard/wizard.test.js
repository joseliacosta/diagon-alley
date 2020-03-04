import React from 'react'
import { render } from '@testing-library/react'
import Wizard from './wizard'

describe('Wizard', () => {
  let wizardMock

  beforeEach(() => {
    wizardMock = {
      name: 'Harry',
      school: 'Hogwarts School of Witchcraft and Wizardry',
      house: 'Gryffindor',
      bloodStatus: 'half-blood',
      dumbledoresArmy: true,
    }
  })

  test('renders wizard name', () => {
    const { getByText } = render(<Wizard {...wizardMock} />)
    const wizardName = getByText(/Harry/i)

    expect(wizardName).toBeInTheDocument()
  })

  test('renders wizard house', () => {
    const { getByText, getByAltText } = render(<Wizard {...wizardMock} />)
    const wizardHouse = getByText(/Gryffindor/i)
    const altImage = getByAltText("Gryffindor's logo")

    expect(wizardHouse).toBeInTheDocument()
    expect(altImage).toBeInTheDocument()
  })
})

test('renders harry potter original logo', () => {
  const wizardMock = {
    name: 'Joselia',
    school: 'Faculdade de Tecnologia Termomecanica',
    house: 'ADS',
    bloodStatus: 'unknow',
    dumbledoresArmy: true,
  }

  const { getByAltText } = render(<Wizard {...wizardMock} />)
  const altImage = getByAltText('Harry Potter Logo')

  expect(altImage).toBeInTheDocument()
})
