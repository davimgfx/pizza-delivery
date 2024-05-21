import { render, screen } from '@testing-library/react'

import GoogleIcon from './GoogleIcon'

const { getByTestId } = screen

describe('<GoogleIcon/>', () => {
  beforeEach(() => {
    render(<GoogleIcon />)
  })

  it('should display the google icon', () => {
    const GoogleIcon = getByTestId('googleIcon')

    expect(GoogleIcon).toBeInTheDocument()
  })
})
