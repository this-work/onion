import { colorModeArgumentType } from "../../../.storybook/arguments/globalTypes";
import CAbSlider from "./C-AB-Slider.vue";
const meta = {
  title: "Komponenten/AB Slider",
  component: CAbSlider,
  tags: ["autodocs"],
  argTypes: {
    colorMode: colorModeArgumentType,
    bounds: {
      control: { type: "range", min: 0, max: 50 }
    },
    initialPosition: {
      control: { type: "range", min: 0, max: 100 }
    },
    keyboardIncrement: {
      control: { type: "range", min: 1, max: 100 }
    }
  },
  args: {
    style: {
      width: "940px"
    },
    colorMode: "light",
    tag: "div",
    before: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      src: "https://picsum.photos/600/400?random=1",
      alt: "Before image"
    },
    after: {
      src: "https://picsum.photos/600/400?random=2",
      alt: "After image"
    },
    bounds: 0,
    initialPosition: 50,
    keyboardIncrement: 5,
    disabled: false
  }
};
export default meta;
export const Default = {
  args: {}
};
export const MitBegrenzung = {
  args: {
    bounds: 20
  }
};
export const BenutzerdefinierteStartposition = {
  args: {
    initialPosition: 75
  }
};
export const Gr\u00F6\u00DFereTastaturschritte = {
  args: {
    keyboardIncrement: 10
  }
};
export const Deaktiviert = {
  args: {
    disabled: true
  }
};
export const BenutzerdefinierterGriff = {
  args: {},
  render: (args) => ({
    components: { CAbSlider },
    setup() {
      return { args };
    },
    template: `
      <C-Ab-Slider v-bind="args">
        <template #handle>
          <span style="padding: 8px; background: white; border-radius: 4px;">\u2194\uFE0F</span>
        </template>
      </C-Ab-Slider>
    `
  })
};
