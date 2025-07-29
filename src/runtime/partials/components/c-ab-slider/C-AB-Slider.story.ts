import type { Meta, StoryObj } from '@storybook/vue3'

import { colorModeArgumentType } from '../../../.storybook/arguments/globalTypes'
import CAbSlider from './C-AB-Slider.vue'

const meta = {
  title: 'Komponenten/AB Slider',
  component: CAbSlider,
  tags: ['autodocs'],
  argTypes: {
    colorMode: colorModeArgumentType,
    bounds: {
      control: { type: 'range', min: 0, max: 50 },
    },
    initialPosition: {
      control: { type: 'range', min: 0, max: 100 },
    },
    keyboardIncrement: {
      control: { type: 'range', min: 1, max: 100 },
    },
  },
  args: {
    style: {
      width: '940px',
    },
    colorMode: 'light',
    tag: 'div',
    before: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      src: 'https://picsum.photos/600/400?random=1',
      alt: 'Before image',
    },
    after: {
      src: 'https://picsum.photos/600/400?random=2',
      alt: 'After image',
    } as never,
    bounds: 0,
    initialPosition: 50,
    keyboardIncrement: 5,
    disabled: false,
  },
} satisfies Meta<typeof CAbSlider>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}

export const MitBegrenzung: Story = {
  args: {
    bounds: 20,
  },
}

export const BenutzerdefinierteStartposition: Story = {
  args: {
    initialPosition: 75,
  },
}

export const GrößereTastaturschritte: Story = {
  args: {
    keyboardIncrement: 10,
  },
}

export const Deaktiviert: Story = {
  args: {
    disabled: true,
  },
}

export const BenutzerdefinierterGriff: Story = {
  args: {},
  render: args => ({
    components: { CAbSlider },
    setup() {
      return { args }
    },
    template: `
      <C-Ab-Slider v-bind="args">
        <template #handle>
          <span style="padding: 8px; background: white; border-radius: 4px;">↔️</span>
        </template>
      </C-Ab-Slider>
    `,
  }),
}
