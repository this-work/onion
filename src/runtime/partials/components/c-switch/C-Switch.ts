import type { Meta, StoryObj } from '@storybook/vue3'

import CSwitch from './C-Switch.vue'

const meta = {
  title: 'Komponenten/Switch',
  component: CSwitch,
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof CSwitch>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
