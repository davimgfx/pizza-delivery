import type { Meta, StoryObj } from '@storybook/react'

import AppsBanner from './AppsBanner'

const meta: Meta<typeof AppsBanner> = {
  title: 'components/AppsBanner',
  component: AppsBanner,
  tags: ['autodocs'],
  args: {
    name: 'name',
  },
}

export default meta

type Story = StoryObj<typeof AppsBanner>

export const Default: Story = {}
