import { colorModeArgumentType, borderRadiusArgumentType } from "../../../../.storybook/arguments/globalTypes";
import CVideo from "./C-Video.vue";
const meta = {
  title: "Komponenten/Video",
  component: CVideo,
  tags: ["autodocs"],
  argTypes: {
    colorMode: colorModeArgumentType,
    borderRadius: borderRadiusArgumentType
  },
  args: {
    colorMode: "light",
    tag: "figure",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    srcAlternates: {},
    title: "",
    fit: "cover",
    position: "center center",
    loop: false,
    playsinline: true,
    muted: false,
    controls: true,
    controlsDownload: false,
    controlsFullscreen: true,
    autoplay: false,
    poster: "",
    borderRadius: "m",
    description: "",
    tracks: {},
    aspectRatios: {}
  }
};
export default meta;
export const Default = {
  args: {}
};
export const VideoWithPosterAndAspectRatio = {
  args: {
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    borderRadius: "m",
    poster: "https://placehold.co/600x600/BDBDBD/fff",
    description: "Intuitive control system",
    aspectRatios: { default: "4/2" }
  }
};
export const VideoWithAutoplayAndAlternateSources = {
  args: {
    srcAlternates: {
      default: {
        mp4: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      m: {
        mp4: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      }
    },
    autoplay: true,
    controls: false,
    loop: true
  }
};
export const VideoWithTracks = {
  args: {
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    autoplay: false,
    controls: true,
    tracks: [
      {
        url: "https://interactive-examples.mdn.mozilla.net/media/examples/friday.vtt",
        label: "English",
        srclang: "en",
        type: "captions",
        default: true
      }
    ]
  }
};
