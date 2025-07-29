import type { Meta, StoryObj } from '@storybook/vue3'

import MImageTabs from './M-Image-Tabs.vue'

const meta = {
  title: 'Module/Image-Tabs',
  component: MImageTabs,
  tags: ['autodocs'],
} satisfies Meta<typeof MImageTabs>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
