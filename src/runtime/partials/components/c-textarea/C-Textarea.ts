import type { Meta, StoryObj } from '@storybook/vue3'

import CTextarea from './C-Textarea.vue'

const meta = {
  title: 'Komponenten/Textarea',
  component: CTextarea,
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof CTextarea>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
