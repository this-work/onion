import type { Meta, StoryObj } from '@storybook/vue3'

import { colorModeArgumentType } from '../../../../.storybook/arguments/globalTypes'
import CButton from './C-Button.vue'

const meta = {
  title: 'Komponenten/Button',
  component: CButton,
  tags: ['autodocs'],
  argTypes: {
    colorMode: colorModeArgumentType,
    appearance: {
      options: ['primary', 'secondary', 'system'],
      control: 'select',
    },
    background: {
      options: ['solid', 'soft', 'outline', 'plain'],
      control: 'select',
    },
  },
  args: {
    colorMode: 'light',
    appearance: 'primary',
    background: 'solid',
    text: 'Button',
    icon: '',
    iconPosition: 'left',
    href: '',
    loading: false,
    disabled: false,
  },
} satisfies Meta<typeof CButton>

export default meta
type Story = StoryObj<object>

export const Default: Story = {
  args: {},
}

export const LangerText: Story = {
  args: {
    text: 'Dies ist ein sehr langer Button',
  },
}

export const OhneIcon: Story = {
  args: {
    text: 'Button ohne Icon',
  },
}

export const NurIcon: Story = {
  args: {
    icon: 'arrow-back',
    text: null,
  },
}

export const MitIconRechts: Story = {
  args: {
    icon: 'arrow-forward',
    iconPosition: 'right',
  },
}

export const Link: Story = {
  args: {
    text: 'Link',
    href: 'https://this.work',
    target: '_blank',
  },
}

export const Deaktiviert: Story = {
  args: {
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

// Primary appearance variations
export const PrimarySolid: Story = {
  args: {
    appearance: 'primary',
    background: 'solid',
  },
}

export const PrimarySoft: Story = {
  args: {
    appearance: 'primary',
    background: 'soft',
  },
}

export const PrimaryOutline: Story = {
  args: {
    appearance: 'primary',
    background: 'outline',
  },
}

export const PrimaryPlain: Story = {
  args: {
    appearance: 'primary',
    background: 'plain',
  },
}

// Secondary appearance variations
export const SecondarySolid: Story = {
  args: {
    appearance: 'secondary',
    background: 'solid',
  },
}

export const SecondarySoft: Story = {
  args: {
    appearance: 'secondary',
    background: 'soft',
  },
}

export const SecondaryOutline: Story = {
  args: {
    appearance: 'secondary',
    background: 'outline',
  },
}

export const SecondaryPlain: Story = {
  args: {
    appearance: 'secondary',
    background: 'plain',
  },
}

// System appearance variations
export const SystemSolid: Story = {
  args: {
    appearance: 'system',
    background: 'solid',
  },
}

export const SystemSoft: Story = {
  args: {
    appearance: 'system',
    background: 'soft',
  },
}

export const SystemOutline: Story = {
  args: {
    appearance: 'system',
    background: 'outline',
  },
}

export const SystemPlain: Story = {
  args: {
    appearance: 'system',
    background: 'plain',
  },
}
