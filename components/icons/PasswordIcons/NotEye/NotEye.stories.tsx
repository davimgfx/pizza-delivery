import type { Meta, StoryObj } from '@storybook/react'

import NotEye from './NotEye'

const meta: Meta<typeof NotEye> = {
  title: 'components/icon/eye/NotEye',
  component: NotEye,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof NotEye>

export const Default: Story = {}
