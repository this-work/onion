<template>
  <transition
    mode="out-in"
    @enter="onTransitionEnter"
    @leave="onTransitionLeave"
  >
    <details
      :key="openContent + ''"
      ref="componentRef"
      :data-groupName="group"
      :open="initiallyOpened"
      :class="partialClass"
    >
      <summary
        ref="summaryRef"
        :class="useBem('label')"
        :aria-expanded="openContent"
        :aria-controls="panelId"
        @click="toggleContentVisible"
      >
        <C-Icon
          tag="figure"
          :class="useBem('icon')"
          aria-hidden="true"
          name="chevron-right"
          size="24px"
        />
        <span
          :id="labelId"
          :class="useBem('label-text')"
          v-html="label"
        />
      </summary>
      <div
        :id="panelId"
        ref="contentRef"
        :class="useBem('content')"
        role="region"
        :aria-labelledby="labelId"
      >
        <slot>
          <c-text :text="text" />
        </slot>
      </div>
    </details>
  </transition>
</template>

<script>

</script>

<script setup>
import { normalizeClass, computed, ref, useId } from "vue";
import { get } from "@vueuse/core";
import { useBem } from "../../../composables/useBem";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
defineOptions({
  inheritAttrs: false
});
const properties = defineProps({
  label: { type: String, required: true },
  text: { type: String, required: false },
  group: { type: String, required: false },
  initiallyOpened: { type: Boolean, required: false, default: false },
  colorMode: { type: String, required: false }
});
const { componentName } = useComponentInstance();
const componentRef = ref(null);
const summaryRef = ref(null);
const contentRef = ref(null);
const labelId = useId();
const panelId = useId();
const openContent = ref(properties.initiallyOpened);
const partialClass = computed(
  () => normalizeClass(
    [
      componentName,
      useColorMode().getClasses(properties),
      {
        [useBem(void 0, `open`, componentName)]: openContent.value
      }
    ]
  )
);
const toggleContentVisible = (event) => {
  event.preventDefault();
  openContent.value = !openContent.value;
  closeAccordionsOfGroup();
};
const closeAccordionsOfGroup = () => {
  if (properties.group) {
    const componentElement = get(componentRef);
    const accordionGroup = document.querySelectorAll(`details[data-groupName="${properties.group}"]`);
    accordionGroup.forEach((accordion) => {
      if (accordion != componentElement) {
        if (accordion.open) {
          accordion.querySelector("summary").dispatchEvent(new Event("click", { bubbles: true }));
        }
      }
    });
  }
};
const onTransitionEnter = (componentElement, done) => {
  const element = componentElement;
  const componentStyles = window.getComputedStyle(element);
  const summaryElement = get(summaryRef);
  const detailsStyles = window.getComputedStyle(summaryElement.parentElement);
  const detailsPaddingBottom = Number.parseFloat(detailsStyles["paddingBottom"]);
  const summaryHeight = summaryElement.offsetHeight + detailsPaddingBottom;
  const contentElement = get(contentRef);
  const contentStyles = window.getComputedStyle(contentElement);
  const contentHeight = Math.ceil(contentElement.offsetHeight + Number.parseFloat(contentStyles["marginTop"]) + Number.parseFloat(contentStyles["marginBottom"]));
  element.open = true;
  let animateFromHeight = `${summaryHeight + contentHeight}px`;
  let animateToHeight = `${summaryHeight}px`;
  if (get(openContent)) {
    animateFromHeight = `${summaryHeight}px`;
    animateToHeight = `${summaryHeight + contentHeight}px`;
  }
  element.style.transitionDuration = `0s`;
  element.style.height = animateFromHeight;
  element.style.transitionDuration = "";
  requestAnimationFrame(() => {
    element.style.height = animateToHeight;
  });
  setTimeout(() => {
    done();
    if (!get(openContent)) {
      element.open = false;
    }
    element.style.removeProperty("height");
  }, Number.parseFloat(componentStyles["transitionDuration"]) * 1e3);
};
const onTransitionLeave = (componentElement) => {
  const element = componentElement;
  element.style.transitionDuration = `0s`;
};
</script>

<style lang="scss" src="./C-Accordion.scss">

</style>
