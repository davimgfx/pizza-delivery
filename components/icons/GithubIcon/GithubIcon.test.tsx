import { render, screen } from '@testing-library/react'

import GithubIcon from './GithubIcon'

const { getByTestId } = screen

describe('<GithubIcon/>', () => {
  beforeEach(() => {
    render(<GithubIcon />)
  })

  it('should display the github icon', () => {
    const GithubIcon = getByTestId('githubIcon')

    expect(GithubIcon).toBeInTheDocument()
  })
})
