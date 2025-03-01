import { Meta, StoryObj } from '@storybook/react'
import { lineHeights } from '@zeni-ignite-ui/tokens'
import { TokensGrid } from '../../components/TokensGrid'

const LineHeights = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1>Line Heights</h1>
      <TokensGrid tokens={lineHeights} />
    </div>
  )
}

const meta: Meta = {
  title: 'Tokens/Line Heights',
  component: LineHeights,
  parameters: {
    // Turn off the Storybook controls panel for this story
    controls: { hideNoControlsWarning: true },
  },
}

export default meta

type Story = StoryObj<typeof LineHeights>

export const Default: Story = {}
