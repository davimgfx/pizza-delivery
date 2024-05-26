import { render, screen } from '@testing-library/react'

import Footer from './Footer'

const { getByText } = screen

describe('<Footer/>', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('should display the name test', () => {
    const { container } = render(<Footer />)

    expect( container).toBeInTheDocument()
  })
})
