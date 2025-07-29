import type { Meta, StoryObj } from '@storybook/vue3'

import TReplace from './T-Replace.vue'

const meta = {
  title: 'Transitions/Replace',
  component: TReplace,
} satisfies Meta<typeof TReplace>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
