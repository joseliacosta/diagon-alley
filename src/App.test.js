import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('Filters the wizard list by house', () => {
    const { getByRole, getAllByText } = render(<App />)

    fireEvent.change(getByRole('listbox'), { target: { value: 'slytherin' } })

    const items = getAllByText('Student from Slytherin')
    expect(items).toHaveLength(1)
  })

  test('Shows all wizard list ', () => {
    const { getAllByText } = render(<App />)

    const items = getAllByText(/Student from/i)
    expect(items).toHaveLength(4)
  })
})
