import type { Meta, StoryObj } from '@storybook/vue3'

import CInput from './C-Input.vue'

const meta = {
  title: 'Komponenten/Inputfeld',
  component: CInput,
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof CInput>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
