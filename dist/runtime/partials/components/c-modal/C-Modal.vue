<template>
  <Teleport :to="rootElement">
    <Transition name="transition-c-modal" @enter="onTransitionEnter" @leave="onTransitionAfterLeave">
      <aside v-if="isOpen" :class="partialClass" :style="{
  background: level === 0 ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.25)',
  zIndex: 900 + level * 10
}" @click="handleBackdropClick">
        <div :class="useBem('container')" :style="isSimpleLayer ? { width: `${width}px` } : {}">
          <div ref="modalRef" role="dialog" aria-modal="true" :aria-describedby="contentID" :class="useBem('box')"
            @keydown.esc="handleEscape">
            <div :class="useBem('controls')">
              <C-Button icon="close-rounded" aria-label="Close modal" background="soft" @click="handleClose" />
            </div>
            <C-Headline v-if="title && isSimpleLayer" :headline="title" :class="useBem('title')" headline-type="h6"
              headline-tag="h3" />

            <article v-if="hasContent" :id="contentID" :class="useBem('content')">
              <C-Image v-if="image" v-bind="image" :class="useBem('image')" />
              <C-Headline v-if="headline" v-bind="headline" :class="useBem('headline')" />
              <C-Text v-if="text" v-bind="text" :class="useBem('text')" />
              <slot>
                <div v-html="content" />
              </slot>
            </article>
          </div>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<script>

</script>

<script setup>
import { createFocusTrap } from "focus-trap";
import { computed, normalizeClass, onBeforeUnmount, ref, useId, useSlots, watch } from "vue";
import { useBem } from "../../../composables/useBem";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
import { useModal } from "../../../composables/useModal";
import { useScrollLocker } from "../../../composables/useScrollLocker";
const properties = defineProps({
  rootElement: { type: String, required: false, default: "body" },
  show: { type: Boolean, required: false, default: false },
  fullwidth: { type: Boolean, required: false, default: false },
  content: { type: null, required: false },
  title: { type: String, required: false },
  image: { type: Object, required: false },
  headline: { type: Object, required: false },
  text: { type: Object, required: false },
  width: { type: Number, required: false, default: 600 },
  colorMode: { type: String, required: false }
});
const contentID = `modal-content-${useId()}`;
const { isOpen, level, open, close } = useModal();
const { lock: lockScrolling, unlock: unlockScrolling } = useScrollLocker();
const modalRef = ref(null);
let focusTrap = null;
let previousActiveElement = null;
watch(
  () => properties.show,
  (newValue) => {
    if (newValue) {
      open();
    } else {
      close();
    }
  },
  { immediate: true }
);
const initFocusTrap = () => {
  if (!modalRef.value) {
    return;
  }
  previousActiveElement = document.activeElement;
  const modalElement = modalRef.value;
  focusTrap = createFocusTrap(modalElement, { fallbackFocus: () => modalElement, clickOutsideDeactivates: true });
  focusTrap.activate();
};
const emit = defineEmits(["update:show", "close"]);
const handleClose = () => {
  close();
  emit("update:show", false);
  emit("close");
};
const handleEscape = (e) => {
  console.log("escaped");
  if (e.key === "Escape") {
    handleClose();
  }
};
const handleBackdropClick = (e) => {
  if (e.target === e.currentTarget) {
    handleClose();
  }
};
const onTransitionEnter = () => {
  initFocusTrap();
  lockScrolling();
};
const onTransitionAfterLeave = () => {
  if (focusTrap) {
    focusTrap.deactivate();
  }
  if (previousActiveElement && "focus" in previousActiveElement) {
    previousActiveElement.focus();
  }
};
onBeforeUnmount(() => {
  if (focusTrap) {
    focusTrap.deactivate();
  }
  if (previousActiveElement && "focus" in previousActiveElement) {
    previousActiveElement.focus();
  }
  unlockScrolling();
});
const hasContent = computed(() => properties.image || properties.headline || properties.text || properties.content || useSlots().default);
const isSimpleLayer = computed(() => properties.image || properties.headline || properties.text);
const isComplexLayer = computed(() => !isSimpleLayer.value);
const { componentName } = useComponentInstance();
const partialClass = computed(
  () => normalizeClass([
    componentName,
    useColorMode().getClasses(properties),
    {
      [useBem(void 0, "fullwidth")]: properties.fullwidth,
      [useBem(void 0, "simple")]: isSimpleLayer.value,
      [useBem(void 0, "complex")]: isComplexLayer.value,
      [useBem(void 0, "no-title")]: !properties.title
    }
  ])
);
defineExpose({
  open,
  close
});
</script>

<style lang="scss" src="./C-Modal.scss">

</style>
