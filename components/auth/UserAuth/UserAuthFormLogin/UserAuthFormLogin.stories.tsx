import type { Meta, StoryObj } from '@storybook/react'

import UserAuthFormLogin from './UserAuthFormLogin'

const meta: Meta<typeof UserAuthFormLogin> = {
  title: 'components/auth/user/UserAuthFormLogin',
  component: UserAuthFormLogin,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UserAuthFormLogin>

export const Default: Story = {}
