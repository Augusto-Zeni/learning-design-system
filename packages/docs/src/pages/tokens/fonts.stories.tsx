import { fonts } from '@ignite-ui/tokens'
import { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'

const Fonts = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1>Font Families</h1>
      <TokensGrid tokens={fonts} />
    </div>
  )
}

const meta: Meta = {
  title: 'Tokens/Font Families',
  component: Fonts,
  parameters: {
    // Turn off the Storybook controls panel for this story
    controls: { hideNoControlsWarning: true },
  },
}

export default meta

type Story = StoryObj<typeof Fonts>

export const Default: Story = {}
