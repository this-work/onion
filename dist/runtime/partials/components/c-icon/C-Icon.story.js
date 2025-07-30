import { colorModeArgumentType } from "../../../.storybook/arguments/globalTypes";
import CIcon from "./C-Icon.vue";
const meta = {
  title: "Komponenten/Icon",
  component: CIcon,
  tags: ["autodocs"],
  argTypes: {
    colorMode: colorModeArgumentType
  },
  args: {
    colorMode: "light",
    name: "home"
  }
};
export default meta;
export const Default = {
  args: {}
};
