import { act, fireEvent, render, screen } from '@testing-library/react'

const {
  getByLabelText,
  getByPlaceholderText,
  getByText,
  findByText,
  findByTestId,
} = screen

import UserAuthFormRegister from './UserAuthFormRegister'

describe('<UserAuthFormRegister/>', () => {
  beforeEach(() => {
    render(<UserAuthFormRegister />)
  })

  it('should display name, email,password input/label', () => {
    const nameLabel = getByLabelText('Primeiro nome')
    const emailLabel = getByLabelText('Email')
    const passwordLabel = getByLabelText('Senha')

    const nameInput = getByPlaceholderText('Paulo')
    const emailInput = getByPlaceholderText('email@exemplo.com.br')
    const passwordInput = getByPlaceholderText('**********')

    expect(nameLabel).toBeInTheDocument()
    expect(emailLabel).toBeInTheDocument()
    expect(passwordLabel).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
  })

  it('should display the a html forget password and create account', () => {
    const loginAccountText = getByText('Já tem uma conta criada?')
    const loginAccountText2 = getByText('Faça Login')

    expect(loginAccountText).toBeInTheDocument()
    expect(loginAccountText2).toBeInTheDocument()
  })

  it('should display error messages when fields are empty or wrongs', async () => {
    const nameInput = getByLabelText('Primeiro nome')
    const usernameInput = getByLabelText('Email')
    const passwordInput = getByLabelText('Senha')
    const submitButton = getByText('Criar uma conta')

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: '' } })
      fireEvent.change(usernameInput, { target: { value: '' } })
      fireEvent.change(passwordInput, { target: { value: '' } })
      fireEvent.click(submitButton)
    })

    expect(await findByText('Preencha o campo de nome')).toBeInTheDocument()
    expect(await findByText('Preencha o campo de email')).toBeInTheDocument()
    expect(await findByText('Preencha o campo de senha')).toBeInTheDocument()
    expect(await findByTestId('warning-icon-name')).toBeInTheDocument()
    expect(await findByTestId('warning-icon-email')).toBeInTheDocument()
    expect(await findByTestId('warning-icon-password')).toBeInTheDocument()

    await act(async () => {
      fireEvent.change(usernameInput, { target: { value: '' } })
      fireEvent.change(passwordInput, { target: { value: '123' } })
      fireEvent.click(submitButton)
    })

    expect(
      await findByText('A senha deve ter pelo menos 6 caracteres'),
    ).toBeInTheDocument()
  })
})
