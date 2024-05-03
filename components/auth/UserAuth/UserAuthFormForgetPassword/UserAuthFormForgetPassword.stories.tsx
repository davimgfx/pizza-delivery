import type { Meta, StoryObj } from '@storybook/react'

import UserAuthFormForgetPassword from './UserAuthFormForgetPassword'

const meta: Meta<typeof UserAuthFormForgetPassword> = {
  title: 'components/UserAuthFormForgetPassword',
  component: UserAuthFormForgetPassword,
  tags: ['autodocs'],
  args: {
    name: 'name',
  },
}

export default meta

type Story = StoryObj<typeof UserAuthFormForgetPassword>

export const Default: Story = {}
