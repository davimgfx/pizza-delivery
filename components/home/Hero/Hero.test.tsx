import { render, screen } from '@testing-library/react'

import Hero from './Hero'

const { getByText } = screen

describe('<Hero/>', () => {
  beforeEach(() => {
    render(<Hero />)
  })

  it('should display the name test', () => {
    const { container } = render(<Hero />)

    expect(container).toBeInTheDocument()
  })
})
