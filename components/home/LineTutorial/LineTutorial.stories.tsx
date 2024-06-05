import type { Meta, StoryObj } from '@storybook/react'

import LineTutorial from './LineTutorial'

const meta: Meta<typeof LineTutorial> = {
  title: 'components/LineTutorial',
  component: LineTutorial,
  tags: ['autodocs'],
  args: {
    name: 'name',
  },
}

export default meta

type Story = StoryObj<typeof LineTutorial>

export const Default: Story = {}
