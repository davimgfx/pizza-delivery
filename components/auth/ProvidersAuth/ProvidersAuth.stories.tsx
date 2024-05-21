import type { Meta, StoryObj } from '@storybook/react'

import ProvidersAuth from './ProvidersAuth'

const meta: Meta<typeof ProvidersAuth> = {
  title: 'components/auth/ProvidersAuth',
  component: ProvidersAuth,
  tags: ['autodocs'],
  args: {
    isLoading: false,
    setIsLoading: () => {},
  },
}

export default meta

type Story = StoryObj<typeof ProvidersAuth>

export const Default: Story = {}

export const Loading: Story = {
  args: {
    isLoading: true,
    setIsLoading: () => {},
  },
}
