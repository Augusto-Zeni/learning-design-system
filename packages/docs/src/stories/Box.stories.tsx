import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@zeni-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
