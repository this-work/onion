import type { Meta } from '@storybook/vue3'

import { borderRadiusArgumentType, colorArgumentType, spacingArgumentType } from '../../../.storybook/arguments/globalTypes'
import Slot from './Slot.vue'
import Module from './../module/Module.vue'
import Section from './../section/Section.vue'

const meta = {
  title: 'Struktur/Slot',
  component: Slot,
  tags: ['autodocs'],
  argTypes: {
    paddingTop: Object.assign({}, spacingArgumentType, {
      name: 'paddingTop',
      description: 'Innenabstand Oben',
      table: {
        defaultValue: { summary: 'none' },
      },
    }),
    paddingBottom: Object.assign({}, spacingArgumentType, {
      name: 'paddingBottom',
      description: 'Innenabstand Unten',
      table: {
        defaultValue: { summary: 'none' },
      },
    }),
    paddingRight: Object.assign({}, spacingArgumentType, {
      name: 'paddingRight',
      description: 'Innenabstand Rechts',
      table: {
        defaultValue: { summary: 'none' },
      },
    }),
    paddingLeft: Object.assign({}, spacingArgumentType, {
      name: 'paddingLeft',
      description: 'Innenabstand Links',
      table: {
        defaultValue: { summary: 'none' },
      },
    }),
    marginTop: Object.assign({}, spacingArgumentType, {
      name: 'marginTop',
      description: 'Außenabstand Oben',
      table: {
        defaultValue: { summary: 'none' },
      },
    }),
    marginBottom: Object.assign({}, spacingArgumentType, {
      name: 'marginBottom',
      description: 'Außenabstand Unten',
      table: {
        defaultValue: { summary: 'none' },
      },
    }),
    background: Object.assign({}, colorArgumentType, {
      name: 'background',
      description: 'Hintergrund',
      table: {
        defaultValue: { summary: 'transparent' },
      },
    }),
    borderRadius: borderRadiusArgumentType,
    width: {
      name: 'width',
      description: 'Breite in Spalte',
      table: {
        defaultValue: { summary: '16' },
      },
      control: { type: 'range', min: 1, max: 16, step: 1 },
    },
  },
  args: {
    width: 16,
  },
} satisfies Meta<typeof Slot>

export default meta

const Template = (args: any) => ({
  components: { Slot, Module, Section },
  setup() {
    return { args }
  },
  template: '<Section><Module start="1" width="16"><Slot v-bind="args"><br></Slot></Module></Section>',
})

export const Default = Template.bind({})
