import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import SpinnerIcon from './SpinnerIcon'

describe('<SpinnerIcon/>', () => {
  beforeEach(() => {
    render(<SpinnerIcon />)
  })

  it('should display the name test', () => {
    const { container } = render(<SpinnerIcon />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
