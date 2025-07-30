import { colorModeArgumentType } from "../../../../.storybook/arguments/globalTypes";
import CLabel from "./C-Label.vue";
const meta = {
  title: "Komponenten/Label",
  component: CLabel,
  tags: ["autodocs"],
  argTypes: {
    colorMode: colorModeArgumentType,
    size: {
      options: ["s", "m", "l"],
      control: "select"
    }
  },
  args: {
    colorMode: "light",
    text: "Label",
    icon: "filter-vintage-outline",
    background: true,
    size: "m"
  }
};
export default meta;
export const Default = {
  args: {}
};
export const LangerText = {
  args: {
    text: "Dies ist ein sehr langes Label"
  }
};
export const OhneIcon = {
  args: {
    text: "Label ohne Icon",
    icon: null
  }
};
export const OhneBackground = {
  args: {
    text: "Label mit Icon ohne Hintergrund",
    background: false
  }
};
export const NurIcon = {
  args: {
    text: null
  }
};
