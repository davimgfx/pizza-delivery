import type { Meta, StoryObj } from '@storybook/react'

import UserAuthFormRegister from './UserAuthFormRegister'

const meta: Meta<typeof UserAuthFormRegister> = {
  title: 'components/auth/user/UserAuthFormRegister',
  component: UserAuthFormRegister,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UserAuthFormRegister>

export const Default: Story = {}
