import type { Meta, StoryObj } from '@storybook/vue3'

import CSelect from './C-Select.vue'

const meta = {
  title: 'Komponenten/Select',
  component: CSelect,
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof CSelect>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
