import { colorModeArgumentType } from "../../../../.storybook/arguments/globalTypes";
import CSlider from "./C-Slider.vue";
const meta = {
  title: "Komponenten/Slider",
  component: CSlider,
  tags: ["autodocs"],
  argTypes: {
    colorMode: colorModeArgumentType
  },
  args: {
    colorMode: "light",
    slides: [
      {
        name: "C-Image",
        data: {
          src: "https://placehold.co/1250x600/BDBDBD/fff",
          borderRadius: "l"
        }
      },
      {
        name: "C-Image",
        data: {
          src: "https://placehold.co/1250x600/BDBDBD/fff",
          borderRadius: "l"
        }
      },
      {
        name: "C-Image",
        data: {
          src: "https://placehold.co/1250x600/BDBDBD/fff",
          borderRadius: "l"
        }
      },
      {
        name: "C-Image",
        data: {
          src: "https://placehold.co/1250x600/BDBDBD/fff",
          borderRadius: "l"
        }
      }
    ]
  }
};
export default meta;
export const Default = {
  args: {}
};
export const WithoutPagination = {
  args: {
    swiperParameter: {
      pagination: {
        enabled: false
      }
    }
  }
};
export const WithLoopAndAutoplay = {
  args: {
    swiperParameter: {
      loop: true,
      autoplay: {
        delay: 3e3
      }
    }
  }
};
