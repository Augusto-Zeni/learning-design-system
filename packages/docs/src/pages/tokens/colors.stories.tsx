import type { Meta, StoryObj } from '@storybook/react'
import { ColorsGrid } from '../../components/ColorsGrid'

const Colors = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1>Colors</h1>
      <p>Essas são as cores utilizadas no Ignite UI.</p>
      <ColorsGrid />
    </div>
  )
}

const meta: Meta = {
  title: 'Tokens/Colors',
  component: Colors,
  parameters: {
    // Turn off the Storybook controls panel for this story
    controls: { hideNoControlsWarning: true },
  },
}

export default meta

type Story = StoryObj<typeof Colors>

export const Default: Story = {}
