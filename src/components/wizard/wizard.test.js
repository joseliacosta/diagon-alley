import React from 'react'
import { render } from '@testing-library/react'
import Wizard from './wizard'

test('renders wizard name', () => {
  const wizardMock = {
    name: 'Harry',
    school: 'Hogwarts School of Witchcraft and Wizardry',
    house: 'Gryffindor',
    bloodStatus: 'half-blood',
    dumbledoresArmy: true,
  }

  const { getByText } = render(<Wizard {...wizardMock} />)
  const wizardName = getByText(/Harry/i)

  expect(wizardName).toBeInTheDocument()
})
