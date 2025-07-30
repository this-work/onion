import { colorModeArgumentType } from "../../../../.storybook/arguments/globalTypes";
import CText from "./C-Text.vue";
const meta = {
  title: "Komponenten/Text",
  component: CText,
  tags: ["autodocs"],
  argTypes: {
    colorMode: colorModeArgumentType
  },
  args: {
    colorMode: "light",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
  }
};
export default meta;
export const Default = {
  args: {}
};
