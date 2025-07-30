import { colorModeArgumentType } from "../../../../.storybook/arguments/globalTypes";
import CButton from "./C-Button.vue";
const meta = {
  title: "Komponenten/Button",
  component: CButton,
  tags: ["autodocs"],
  argTypes: {
    colorMode: colorModeArgumentType,
    appearance: {
      options: ["primary", "secondary", "system"],
      control: "select"
    },
    background: {
      options: ["solid", "soft", "outline", "plain"],
      control: "select"
    }
  },
  args: {
    colorMode: "light",
    appearance: "primary",
    background: "solid",
    text: "Button",
    icon: "",
    iconPosition: "left",
    href: "",
    loading: false,
    disabled: false
  }
};
export default meta;
export const Default = {
  args: {}
};
export const LangerText = {
  args: {
    text: "Dies ist ein sehr langer Button"
  }
};
export const OhneIcon = {
  args: {
    text: "Button ohne Icon"
  }
};
export const NurIcon = {
  args: {
    icon: "arrow-back",
    text: null
  }
};
export const MitIconRechts = {
  args: {
    icon: "arrow-forward",
    iconPosition: "right"
  }
};
export const Link = {
  args: {
    text: "Link",
    href: "https://this.work",
    target: "_blank"
  }
};
export const Deaktiviert = {
  args: {
    disabled: true
  }
};
export const Loading = {
  args: {
    loading: true
  }
};
export const PrimarySolid = {
  args: {
    appearance: "primary",
    background: "solid"
  }
};
export const PrimarySoft = {
  args: {
    appearance: "primary",
    background: "soft"
  }
};
export const PrimaryOutline = {
  args: {
    appearance: "primary",
    background: "outline"
  }
};
export const PrimaryPlain = {
  args: {
    appearance: "primary",
    background: "plain"
  }
};
export const SecondarySolid = {
  args: {
    appearance: "secondary",
    background: "solid"
  }
};
export const SecondarySoft = {
  args: {
    appearance: "secondary",
    background: "soft"
  }
};
export const SecondaryOutline = {
  args: {
    appearance: "secondary",
    background: "outline"
  }
};
export const SecondaryPlain = {
  args: {
    appearance: "secondary",
    background: "plain"
  }
};
export const SystemSolid = {
  args: {
    appearance: "system",
    background: "solid"
  }
};
export const SystemSoft = {
  args: {
    appearance: "system",
    background: "soft"
  }
};
export const SystemOutline = {
  args: {
    appearance: "system",
    background: "outline"
  }
};
export const SystemPlain = {
  args: {
    appearance: "system",
    background: "plain"
  }
};
