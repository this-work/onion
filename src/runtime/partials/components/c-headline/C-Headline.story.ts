import type { Meta, StoryObj } from '@storybook/vue3'

import { colorModeArgumentType } from '../../../../.storybook/arguments/globalTypes'
import CHeadline from './C-Headline.vue'

const meta = {
  title: 'Komponenten/Headline',
  component: CHeadline,
  tags: ['autodocs'],
  argTypes: {
    colorMode: colorModeArgumentType,
    headlineTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'],
      control: 'select',
    },
    headlineType: {
      options: ['h0', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'copytext--xbig', 'copytext--big', 'copytext', 'copytext--small', 'tinytext'],
      control: 'select',
    },
  },
  args: {
    colorMode: 'light',
    headline: 'Dies ist eine Test Headline',
    headlineTag: 'h2',
    headlineType: 'h2',
  },
} satisfies Meta<typeof CHeadline>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
