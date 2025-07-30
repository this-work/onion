import { colorArgumentType, spacingArgumentType } from "../../../.storybook/arguments/globalTypes";
import Section from "./Section.vue";
const meta = {
  title: "Struktur/Section",
  component: Section,
  tags: ["autodocs"],
  argTypes: {
    paddingTop: Object.assign({}, spacingArgumentType, {
      name: "paddingTop",
      description: "Innenabstand Oben",
      table: {
        defaultValue: { summary: "none" }
      }
    }),
    paddingBottom: Object.assign({}, spacingArgumentType, {
      name: "paddingBottom",
      description: "Innenabstand Unten",
      table: {
        defaultValue: { summary: "none" }
      }
    }),
    marginTop: Object.assign({}, spacingArgumentType, {
      name: "marginTop",
      description: "Au\xDFenabstand Oben",
      table: {
        defaultValue: { summary: "none" }
      }
    }),
    marginBottom: Object.assign({}, spacingArgumentType, {
      name: "marginBottom",
      description: "Au\xDFenabstand Unten",
      table: {
        defaultValue: { summary: "none" }
      }
    }),
    background: Object.assign({}, colorArgumentType, {
      name: "background",
      description: "Hintergrund",
      table: {
        defaultValue: { summary: "transparent" }
      }
    })
  },
  args: {
    paddingTop: "s",
    paddingBottom: "s",
    marginTop: "none",
    marginBottom: "none",
    background: "medium"
  }
};
export default meta;
const Template = (args) => ({
  components: { Section },
  setup() {
    return { args };
  },
  template: '<Section v-bind="args"><br></Section>'
});
export const Default = Template.bind({});
