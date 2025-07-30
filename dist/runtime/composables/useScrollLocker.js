import { ref } from "vue";
const config = {
  scrollLocker: {
    affectedElements: [
      { selector: "body", property: "right" }
    ]
  }
};
const lockCount = ref(0);
export function useScrollLocker() {
  const appConfig = config;
  const affectedElements = appConfig.scrollLocker.affectedElements || [];
  const lock = () => {
    if (typeof window === "undefined") {
      return;
    }
    lockCount.value++;
    if (lockCount.value === 1) {
      const htmlEl = document.querySelector("html");
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        htmlEl?.style.setProperty("margin-right", `${scrollbarWidth}px`);
        affectedElements.forEach(({ element, selector, property }) => {
          const targetElement = element || (selector ? document.querySelector(selector) : null);
          if (targetElement) {
            targetElement.style.setProperty(property, `${scrollbarWidth}px`);
          }
        });
      }
      document.body.style.setProperty("top", `-${window.scrollY}px`);
      htmlEl?.classList.add("has-no-scroll");
    }
  };
  const unlock = () => {
    if (typeof window === "undefined") {
      return;
    }
    lockCount.value--;
    if (lockCount.value === 0) {
      const scrollY = document.body.style.top;
      const htmlEl = document.querySelector("html");
      if (htmlEl) {
        htmlEl.style.removeProperty("margin-right");
      }
      affectedElements.forEach(({ element, selector, property }) => {
        const targetElement = element || (selector ? document.querySelector(selector) : null);
        if (targetElement) {
          targetElement.style.removeProperty(property);
        }
      });
      htmlEl?.classList.remove("has-no-scroll");
      document.body.style.removeProperty("top");
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1);
      }
    }
  };
  return { lock, unlock };
}
