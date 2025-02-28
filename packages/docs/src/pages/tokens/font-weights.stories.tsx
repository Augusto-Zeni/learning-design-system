import { fontWeights } from '@ignite-ui/tokens'
import { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'

const FontWeights = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1>Font Weights</h1>
      <TokensGrid tokens={fontWeights} />
    </div>
  )
}

const meta: Meta = {
  title: 'Tokens/Font Weights',
  component: FontWeights,
  parameters: {
    // Turn off the Storybook controls panel for this story
    controls: { hideNoControlsWarning: true },
  },
}

export default meta

type Story = StoryObj<typeof FontWeights>

export const Default: Story = {}
