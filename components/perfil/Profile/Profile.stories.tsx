import type { Meta, StoryObj } from '@storybook/react'

import Profile from './Profile'

const meta: Meta<typeof Profile> = {
  title: 'components/Profile',
  component: Profile,
  tags: ['autodocs'],
  args: {
    name: 'name',
  },
}

export default meta

type Story = StoryObj<typeof Profile>

export const Default: Story = {}
