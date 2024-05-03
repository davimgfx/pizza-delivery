import type { Meta, StoryObj } from '@storybook/react'

import UserAuthFormResetPassword from './UserAuthFormResetPassword'

const meta: Meta<typeof UserAuthFormResetPassword> = {
  title: 'components/UserAuthFormResetPassword',
  component: UserAuthFormResetPassword,
  tags: ['autodocs'],
  args: {
    name: 'name',
  },
}

export default meta

type Story = StoryObj<typeof UserAuthFormResetPassword>

export const Default: Story = {}
