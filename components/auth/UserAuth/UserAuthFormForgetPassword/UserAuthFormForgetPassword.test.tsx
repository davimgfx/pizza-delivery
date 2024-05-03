import { render, screen } from '@testing-library/react'

import UserAuthFormForgetPassword from './UserAuthFormForgetPassword'

const { getByText } = screen

describe('<UserAuthFormForgetPassword/>', () => {
  beforeEach(() => {
    render(<UserAuthFormForgetPassword/>)
  })

  it('should display the name test', () => {
    const { container } = render(<UserAuthFormForgetPassword />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
