import type { Meta, StoryObj } from '@storybook/react'

import UserInfosAddress from './UserInfosAddress'

const meta: Meta<typeof UserInfosAddress> = {
  title: 'components/UserInfosAdress',
  component: UserInfosAddress,
  tags: ['autodocs'],
  args: {
    name: 'name',
  },
}

export default meta

type Story = StoryObj<typeof UserInfosAddress>

export const Default: Story = {}
