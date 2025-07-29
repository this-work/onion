import type { Meta, StoryObj } from '@storybook/vue3'

import MSlider from './M-Slider.vue'

const meta = {
  title: 'Module/Slider',
  component: MSlider,
  tags: ['autodocs'],
} satisfies Meta<typeof MSlider>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
