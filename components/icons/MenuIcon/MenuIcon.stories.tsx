import type { Meta, StoryObj } from '@storybook/react'

import MenuIcon from './MenuIcon'

const meta: Meta<typeof MenuIcon> = {
  title: 'components/MenuIcon',
  component: MenuIcon,
  tags: ['autodocs'],
  args: {
    name: 'name',
  },
}

export default meta

type Story = StoryObj<typeof MenuIcon>

export const Default: Story = {}
