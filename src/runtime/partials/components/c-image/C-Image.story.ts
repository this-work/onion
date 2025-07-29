import type { Meta, StoryObj } from '@storybook/vue3'

import { colorModeArgumentType, borderRadiusArgumentType } from '../../../.storybook/arguments/globalTypes'
import CImage from './C-Image.vue'

const meta = {
  title: 'Komponenten/Image',
  component: CImage,
  tags: ['autodocs'],
  argTypes: {
    colorMode: colorModeArgumentType,
    borderRadius: borderRadiusArgumentType,
  },
  args: {
    colorMode: 'light',
    src: 'https://picsum.photos/id/22/300/100',
    description: '',
    alt: '',
    title: '',
    borderRadius: 'none',
  },
} satisfies Meta<typeof CImage>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}
