import { Meta, StoryObj } from '@storybook/react'
import { radii } from '@zeni-ignite-ui/tokens'
import { TokensGrid } from '../../components/TokensGrid'

const Radii = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1>Radii</h1>
      <TokensGrid tokens={radii} />
    </div>
  )
}

const meta: Meta = {
  title: 'Tokens/Radil',
  component: Radii,
  parameters: {
    // Turn off the Storybook controls panel for this story
    controls: { hideNoControlsWarning: true },
  },
}

export default meta

type Story = StoryObj<typeof Radii>

export const Default: Story = {}
