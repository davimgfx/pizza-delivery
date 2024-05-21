import { render, screen } from '@testing-library/react'

import Eye from './Eye'

const { getByTestId } = screen

describe('<Eye/>', () => {
  beforeEach(() => {
    render(<Eye />)
  })

  it('should display the Eye Icon', () => {
    const notEyeIcon = getByTestId("eyeIcon")

    expect(notEyeIcon).toBeInTheDocument()
  })
})
