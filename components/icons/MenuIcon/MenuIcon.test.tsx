import { render, screen } from '@testing-library/react'

import MenuIcon from './MenuIcon'

const { getByText } = screen

describe('<MenuIcon/>', () => {
  beforeEach(() => {
    render(<MenuIcon isMenu={true}/>)
  })

  it('should display the name test', () => {
    const { container } = render(<MenuIcon isMenu={true}/>)

    expect(container).toBeInTheDocument()
  })
})
