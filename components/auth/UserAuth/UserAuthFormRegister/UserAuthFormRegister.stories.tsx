import type { Meta, StoryObj } from '@storybook/react'

import UserAuthForm from './UserAuthFormRegister'

const meta: Meta<typeof UserAuthForm> = {
  title: 'components/UserAuthForm',
  component: UserAuthForm,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UserAuthForm>

export const Default: Story = {}
