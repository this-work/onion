import type { Meta, StoryObj } from '@storybook/vue3'

import { colorModeArgumentType } from '../../../.storybook/arguments/globalTypes'
import CIcon from './C-Icon.vue'

const meta = {
  title: 'Komponenten/Icon',
  component: CIcon,
  tags: ['autodocs'],
  argTypes: {
    colorMode: colorModeArgumentType,
  },
  args: {
    colorMode: 'light',
    name: 'home',
  },
} satisfies Meta<typeof CIcon>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
