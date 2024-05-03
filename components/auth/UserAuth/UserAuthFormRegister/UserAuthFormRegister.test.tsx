import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import UserAuthForm from './UserAuthFormRegister'

describe('<UserAuthForm/>', () => {
  beforeEach(() => {
    render(<UserAuthForm />)
  })

  it('should display the name test', () => {
    const { container } = render(<UserAuthForm />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
