import { render, screen } from '@testing-library/react'

import SpinnerIcon from './SpinnerIcon'

const { getByTestId } = screen

describe('<SpinnerIcon/>', () => {
  beforeEach(() => {
    render(<SpinnerIcon />)
  })

  it('should display the spinner icon', () => {
    const SpinnerIcon = getByTestId('spinnerIcon')

    expect(SpinnerIcon).toBeInTheDocument()
  })
})
