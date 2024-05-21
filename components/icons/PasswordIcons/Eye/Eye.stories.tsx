import type { Meta, StoryObj } from '@storybook/react'

import Eye from './Eye'

const meta: Meta<typeof Eye> = {
  title: 'components/icon/eye/Eye',
  component: Eye,
  tags: ['autodocs'],

}

export default meta

type Story = StoryObj<typeof Eye>

export const Default: Story = {}
