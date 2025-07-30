import CHotspot from "./C-Hotspot.vue";
const meta = {
  title: "Komponenten/Hotspot",
  component: CHotspot,
  tags: ["autodocs"],
  args: {
    style: {
      width: "690px"
    },
    image: {
      src: "/demo/hotspot/1.png",
      alt: "Beispielbild"
    },
    hotspots: [
      {
        content: {
          headline: {
            headline: "Feature 1",
            headlineType: "h4"
          }
        },
        x: 29,
        y: 40
      },
      {
        content: {
          headline: {
            headline: "Feature 2",
            headlineType: "h4"
          }
        },
        x: 62,
        y: 27
      },
      {
        content: {
          headline: {
            headline: "Feature 3",
            headlineType: "h4"
          }
        },
        x: 55.8,
        y: 48
      },
      {
        content: {
          headline: {
            headline: "Feature 4",
            headlineType: "h4"
          }
        },
        x: 59,
        y: 74
      }
    ]
  }
};
export default meta;
export const Standard = {
  args: {}
};
export const AlternativenPositionen = {
  args: {
    hotspots: [
      {
        x: 30,
        y: 30,
        alternates: {
          xxs: { x: 5, y: 5 },
          xs: { x: 18, y: 18 },
          s: { x: 32, y: 32 },
          m: { x: 45, y: 45 },
          l: { x: 60, y: 60 },
          xl: { x: 75, y: 75 },
          xxl: { x: 90, y: 90 }
        },
        content: {
          title: "Responsiver Hotspot",
          text: {
            text: "Dieser Hotspot \xE4ndert seine Position bei verschiedenen Breakpoints"
          }
        }
      }
    ]
  }
};
export const Deaktiviert = {
  args: {
    hotspots: [
      {
        content: {
          headline: {
            headline: "Feature 1",
            headlineType: "h4"
          }
        },
        x: 29,
        y: 40,
        disabled: true
      },
      {
        content: {
          headline: {
            headline: "Feature 2",
            headlineType: "h4"
          }
        },
        x: 62,
        y: 27,
        disabled: true
      },
      {
        content: {
          headline: {
            headline: "Feature 3",
            headlineType: "h4"
          }
        },
        x: 55.8,
        y: 48,
        disabled: true
      },
      {
        content: {
          headline: {
            headline: "Feature 4",
            headlineType: "h4"
          }
        },
        x: 59,
        y: 74,
        disabled: true
      }
    ]
  }
};
