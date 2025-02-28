import { space } from '@ignite-ui/tokens'
import { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'

const Space = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1>Space</h1>
      <TokensGrid tokens={space} hasRemValue />
    </div>
  )
}

const meta: Meta = {
  title: 'Tokens/Space',
  component: Space,
  parameters: {
    // Turn off the Storybook controls panel for this story
    controls: { hideNoControlsWarning: true },
  },
}

export default meta

type Story = StoryObj<typeof Space>

export const Default: Story = {}
