import { fontSizes } from '@ignite-ui/tokens'
import { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'

const FontSizes = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1>Font Sizes</h1>
      <TokensGrid tokens={fontSizes} hasRemValue />
    </div>
  )
}

const meta: Meta = {
  title: 'Tokens/Font Sizes',
  component: FontSizes,
  parameters: {
    // Turn off the Storybook controls panel for this story
    controls: { hideNoControlsWarning: true },
  },
}

export default meta

type Story = StoryObj<typeof FontSizes>

export const Default: Story = {}
