import { fireEvent, render, screen } from '@testing-library/react'

import UserAuthFormLogin from './UserAuthFormLogin'

import { act } from 'react'

const { getByText, getByLabelText, findByText, findByTestId } = screen

describe('<UserAuthFormLogin/>', () => {
  beforeEach(() => {
    render(<UserAuthFormLogin />)
  })

  it('should display the email and password input/label', () => {
    const emailLabel = getByText('Email')
    const passwordLabel = getByText('Senha')
    const emailInput = getByText('Email')
    const passwordInput = getByText('Senha')

    expect(emailLabel).toBeInTheDocument()
    expect(passwordLabel).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
  })

  it('should display the a html forget password and create account', () => {
    const forgetPasswordText = getByText('Esqueceu a senha?')
    const createAccountText = getByText('Não tem uma conta ainda?')
    const createAccountRightNowText = getByText('Crie agora')

    expect(forgetPasswordText).toBeInTheDocument()
    expect(createAccountText).toBeInTheDocument()
    expect(createAccountRightNowText).toBeInTheDocument()
  })

  it('should display error messages when fields are empty or wrongs', async () => {
    const usernameInput = getByLabelText('Email')
    const passwordInput = getByLabelText('Senha')
    const submitButton = getByText('Entrar')

    await act(async () => {
      fireEvent.change(usernameInput, { target: { value: '' } })
      fireEvent.change(passwordInput, { target: { value: '' } })
      fireEvent.click(submitButton)
    })

    expect(await findByText('Preencha o campo de email')).toBeInTheDocument()
    expect(await findByText('Preencha o campo de senha')).toBeInTheDocument()
    expect(await findByTestId('warning-icon-email')).toBeInTheDocument()
    expect(await findByTestId('warning-icon-password')).toBeInTheDocument()

    await act(async () => {
      fireEvent.change(usernameInput, { target: { value: '' } })
      fireEvent.change(passwordInput, { target: { value: '123' } })
      fireEvent.click(submitButton)
    })

    expect(await findByText('A senha deve ter pelo menos 6 caracteres')).toBeInTheDocument()  
  })
})
