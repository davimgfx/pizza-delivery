import { render, screen } from '@testing-library/react'

import NotEye from './NotEye'

const { getByTestId } = screen

describe('<NotEye/>', () => {
  beforeEach(() => {
    render(<NotEye />)
  })

  it('should display the notEye Icon', () => {
    const notEyeIcon = getByTestId("notEyeIcon")

    expect(notEyeIcon).toBeInTheDocument()
  })
})
