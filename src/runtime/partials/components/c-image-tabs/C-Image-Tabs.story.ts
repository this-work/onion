import type { Meta, StoryObj } from '@storybook/vue3'

import CImageTabs from './C-Image-Tabs.vue'

const meta = {
  title: 'Komponenten/Image-Tabs',
  component: CImageTabs,
  tags: ['autodocs'],
} satisfies Meta<typeof CImageTabs>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
