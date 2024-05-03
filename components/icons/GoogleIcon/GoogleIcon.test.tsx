import { render } from '@testing-library/react'

import GoogleIcon from './GoogleIcon'

describe('<GoogleIcon/>', () => {
  beforeEach(() => {
    render(<GoogleIcon />)
  })

  it('should display the name test', () => {
    const { container } = render(<GoogleIcon />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
