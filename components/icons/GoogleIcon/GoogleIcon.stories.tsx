import type { Meta, StoryObj } from '@storybook/react'

import GoogleIcon from './GoogleIcon'

const meta: Meta<typeof GoogleIcon> = {
  title: 'components/GoogleIcon',
  component: GoogleIcon,
  tags: ['autodocs'],
  args: {
    name: 'name',
  },
}

export default meta

type Story = StoryObj<typeof GoogleIcon>

export const Default: Story = {}
