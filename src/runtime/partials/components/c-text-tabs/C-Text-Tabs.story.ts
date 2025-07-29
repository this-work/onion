import type { Meta, StoryObj } from '@storybook/vue3'

import CTextTabs from './C-Text-Tabs.vue'

const meta = {
  title: 'Komponenten/Text-Tabs',
  component: CTextTabs,
  tags: ['autodocs'],
} satisfies Meta<typeof CTextTabs>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
