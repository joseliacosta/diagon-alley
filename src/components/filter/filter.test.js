import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Filter from './filter'

describe('Filter', () => {
  it('calls onChange function from parent', () => {
    const mockOnchange = jest.fn()

    const { getByRole } = render(<Filter onChange={mockOnchange} />)

    fireEvent.change(getByRole('listbox'), { target: { value: 'ravenclaw' } })
    expect(mockOnchange).toHaveBeenCalled()
  })
})
