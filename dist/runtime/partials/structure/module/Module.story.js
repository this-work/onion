import { borderRadiusArgumentType, colorArgumentType, spacingArgumentType } from "../../../.storybook/arguments/globalTypes";
import Module from "./Module.vue";
import Section from "./../section/Section.vue";
const meta = {
  title: "Struktur/Module",
  component: Module,
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
    paddingRight: Object.assign({}, spacingArgumentType, {
      name: "paddingRight",
      description: "Innenabstand Rechts",
      table: {
        defaultValue: { summary: "none" }
      }
    }),
    paddingLeft: Object.assign({}, spacingArgumentType, {
      name: "paddingLeft",
      description: "Innenabstand Links",
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
    }),
    borderRadius: borderRadiusArgumentType,
    start: {
      name: "start",
      description: "Start Spalte",
      table: {
        defaultValue: { summary: "1" }
      },
      control: { type: "range", min: 1, max: 15, step: 1 }
    },
    width: {
      name: "width",
      description: "Breite in Spalte",
      table: {
        defaultValue: { summary: "16" }
      },
      control: { type: "range", min: 1, max: 16, step: 1 }
    }
  },
  args: {
    start: 1,
    width: 16,
    type: "stacked",
    verticalAlignment: "stretch"
  }
};
export default meta;
const Template = (args) => ({
  components: { Module, Section },
  setup() {
    return { args };
  },
  template: '<Section><Module v-bind="args"><br></Module></Section>'
});
export const Default = Template.bind({});
