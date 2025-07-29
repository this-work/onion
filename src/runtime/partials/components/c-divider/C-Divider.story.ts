import type { Meta, StoryObj } from '@storybook/vue3'

import CDivider from './C-Divider.vue'

const meta = {
  title: 'Komponenten/Trenner',
  component: CDivider,
  tags: ['autodocs'],
  argTypes: {
  },
  args: {

  },
} satisfies Meta<typeof CDivider>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
