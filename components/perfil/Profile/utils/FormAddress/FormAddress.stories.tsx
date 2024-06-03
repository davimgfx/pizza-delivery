import type { Meta, StoryObj } from '@storybook/react'

import FormAddress from './FormAddress'

const meta: Meta<typeof FormAddress> = {
  title: 'components/FormAddress',
  component: FormAddress,
  tags: ['autodocs'],
  args: {
    name: 'name',
  },
}

export default meta

type Story = StoryObj<typeof FormAddress>

export const Default: Story = {}
