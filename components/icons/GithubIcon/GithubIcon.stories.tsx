import type { Meta, StoryObj } from '@storybook/react'

import GithubIcon from './GithubIcon'

const meta: Meta<typeof GithubIcon> = {
  title: 'components/icon/GithubIcon',
  component: GithubIcon,
  tags: ['autodocs'],
  args: {},
}

export default meta

type Story = StoryObj<typeof GithubIcon>

export const Default: Story = {}
