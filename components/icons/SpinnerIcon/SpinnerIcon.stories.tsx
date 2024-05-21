import type { Meta, StoryObj } from '@storybook/react'

import SpinnerIcon from './SpinnerIcon'

const meta: Meta<typeof SpinnerIcon> = {
  title: 'components/icon/SpinnerIcon',
  component: SpinnerIcon,
  tags: ['autodocs'],
  args: {},
}

export default meta

type Story = StoryObj<typeof SpinnerIcon>

export const Default: Story = {}
