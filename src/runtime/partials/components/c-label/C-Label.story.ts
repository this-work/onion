import type { Meta, StoryObj } from '@storybook/vue3'

import { colorModeArgumentType } from '../../../../.storybook/arguments/globalTypes'
import CLabel from './C-Label.vue'

const meta = {
  title: 'Komponenten/Label',
  component: CLabel,
  tags: ['autodocs'],
  argTypes: {
    colorMode: colorModeArgumentType,
    size: {
      options: ['s', 'm', 'l'],
      control: 'select',
    },
  },
  args: {
    colorMode: 'light',
    text: 'Label',
    icon: 'filter-vintage-outline',
    background: true,
    size: 'm',
  },
} satisfies Meta<typeof CLabel>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}

export const LangerText: Story = {
  args: {
    text: 'Dies ist ein sehr langes Label',
  },
}

export const OhneIcon: Story = {
  args: {
    text: 'Label ohne Icon',
    icon: null,
  },
}

export const OhneBackground: Story = {
  args: {
    text: 'Label mit Icon ohne Hintergrund',
    background: false,
  },
}

export const NurIcon: Story = {
  args: {
    text: null,
  },
}
