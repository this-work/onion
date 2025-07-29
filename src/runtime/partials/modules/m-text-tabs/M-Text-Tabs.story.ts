import type { Meta, StoryObj } from '@storybook/vue3'

import MTextTabs from './M-Text-Tabs.vue'

const meta = {
  title: 'Module/Text-Tabs',
  component: MTextTabs,
  tags: ['autodocs'],
} satisfies Meta<typeof MTextTabs>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
