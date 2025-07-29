import type { Meta, StoryObj } from '@storybook/vue3'

import MAccordion from './M-Accordion.vue'

const meta = {
  title: 'Module/Akkordion',
  component: MAccordion,
  tags: ['autodocs'],
} satisfies Meta<typeof MAccordion>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
