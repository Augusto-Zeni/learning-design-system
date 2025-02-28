import type { Meta, StoryObj } from '@storybook/react'

/**
 * # Ignite UI
 * Design System do Ignite.
 */
const Home = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1>Ignite UI</h1>
      <p>Design System do Ignite.</p>
    </div>
  )
}

const meta: Meta = {
  title: 'Home',
  component: Home,
  parameters: {
    // Turn off the Storybook controls panel for this story
    controls: { hideNoControlsWarning: true },
  },
}

export default meta

type Story = StoryObj<typeof Home>

export const Default: Story = {}
