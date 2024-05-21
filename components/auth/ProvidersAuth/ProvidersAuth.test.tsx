import { render, screen } from '@testing-library/react'

import ProvidersAuth from './ProvidersAuth'

const { getByText, getByTestId, getAllByTestId, queryAllByTestId } = screen

describe('<ProvidersAuth/>', () => {
  it('should display the Github and Google Button when isLoading is false', () => {
    render(<ProvidersAuth isLoading={false} setIsLoading={() => {}} text="Login com conta"/>)
    const googleButton = getByText('Login com conta Google')
    const githubButton = getByText('Login com conta Github')

    expect(googleButton).toBeInTheDocument()
    expect(githubButton).toBeInTheDocument()
  })

  it('should display the Github and Google Icons when isLoading is false', () => {
    render(<ProvidersAuth isLoading={false} setIsLoading={() => {}}  text="Login com conta"/>)
    const googleIcon = getByTestId('google icon')
    const githubIcon = getByTestId('github icon')

    expect(googleIcon).toBeInTheDocument()
    expect(githubIcon).toBeInTheDocument()
  })

  it('should not display the Loading Icon when isLoading is false', () => {
    render(<ProvidersAuth isLoading={false} setIsLoading={() => {}} text="Login com conta"/>)
    const loadingIcons = queryAllByTestId('loading icon')
    expect(loadingIcons).toHaveLength(0)
  })

  it('should display the Loading Icons when isLoading is true', () => {
    render(<ProvidersAuth isLoading={true} setIsLoading={() => {}} text="Login com conta"/>)
    const googleButton = getAllByTestId('loading icon')[0]
    const githubButton = getAllByTestId('loading icon')[1]

    expect(googleButton).toBeInTheDocument()
    expect(githubButton).toBeInTheDocument()
  })
})
