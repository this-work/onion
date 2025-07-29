import type { Meta, StoryObj } from '@storybook/vue3'

import CTile from './C-Tile.vue'

const meta = {
  title: 'Komponenten/Kachel',
  component: CTile,
  tags: ['autodocs'],
  argTypes: {
  },
  args: {

  },
} satisfies Meta<typeof CTile>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
