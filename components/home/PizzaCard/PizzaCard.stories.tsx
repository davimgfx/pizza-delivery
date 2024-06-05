import type { Meta, StoryObj } from '@storybook/react'

import PizzaCard from './PizzaCard'

const meta: Meta<typeof PizzaCard> = {
  title: 'components/PizzaCard',
  component: PizzaCard,
  tags: ['autodocs'],
  args: {
    name: 'name',
  },
}

export default meta

type Story = StoryObj<typeof PizzaCard>

export const Default: Story = {}
