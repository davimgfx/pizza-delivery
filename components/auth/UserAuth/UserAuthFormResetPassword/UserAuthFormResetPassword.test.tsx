import { render, screen } from '@testing-library/react'

import UserAuthFormResetPassword from './UserAuthFormResetPassword'

describe('<UserAuthFormResetPassword/>', () => {
  beforeEach(() => {
    render(<UserAuthFormResetPassword />)
  })

  it('should display the name test', () => {
    const { container } = render(<UserAuthFormResetPassword />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
