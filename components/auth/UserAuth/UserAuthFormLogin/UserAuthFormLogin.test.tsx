import { render } from '@testing-library/react'

import UserAuthForm from './UserAuthFormLogin'

describe('<UserAuthForm/>', () => {
  beforeEach(() => {
    render(<UserAuthForm />)
  })

  it('should display the name test', () => {
    const { container } = render(<UserAuthForm />)

    expect(container).toBeInTheDocument()
  })
})
