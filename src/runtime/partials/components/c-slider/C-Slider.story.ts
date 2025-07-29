import type { Meta, StoryObj } from '@storybook/vue3'

import { colorModeArgumentType } from '../../../../.storybook/arguments/globalTypes'
import CSlider from './C-Slider.vue'

const meta = {
  title: 'Komponenten/Slider',
  component: CSlider,
  tags: ['autodocs'],
  argTypes: {
    colorMode: colorModeArgumentType,
  },
  args: {
    colorMode: 'light',
    slides: [
      {
        name: 'C-Image',
        data: {
          src: 'https://placehold.co/1250x600/BDBDBD/fff',
          borderRadius: 'l',
        },
      },
      {
        name: 'C-Image',
        data: {
          src: 'https://placehold.co/1250x600/BDBDBD/fff',
          borderRadius: 'l',
        },
      },
      {
        name: 'C-Image',
        data: {
          src: 'https://placehold.co/1250x600/BDBDBD/fff',
          borderRadius: 'l',
        },
      },
      {
        name: 'C-Image',
        data: {
          src: 'https://placehold.co/1250x600/BDBDBD/fff',
          borderRadius: 'l',
        },
      },
    ],
  },
} satisfies Meta<typeof CSlider>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}

export const WithoutPagination: Story = {
  args: {
    swiperParameter: {
      pagination: {
        enabled: false,
      },
    },
  },
}

export const WithLoopAndAutoplay: Story = {
  args: {
    swiperParameter: {
      loop: true,
      autoplay: {
        delay: 3000,
      },
    },
  },
}
