import { colorModeArgumentType } from "../../../.storybook/arguments/globalTypes";
import CAccordion from "./C-Accordion.vue";
const meta = {
  title: "Komponenten/Akkordion",
  component: CAccordion,
  tags: ["autodocs"],
  argTypes: {
    colorMode: colorModeArgumentType
  },
  args: {
    colorMode: "light",
    label: "\xD6ffne hier den weiteren Content",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
  }
};
export default meta;
export const Default = {
  args: {}
};
