<template>
  <Transition
    mode="out-in"
    name="t-replace"
    @before-enter="prepareTransition"
    @before-leave="prepareTransition"
    @enter="onTransitionEnter"
    @leave="onTransitionLeave"
    @after-enter="onTransitionAfterEnter"
  >
    <slot />
  </Transition>
</template>

<script setup>
const properties = defineProps({
  duration: { type: Number, required: false }
});
let leaveElementHeight = "0px";
const prepareTransition = (componentElement) => {
  const element = componentElement;
  if (properties.duration) {
    element.style.transitionDuration = `${properties.duration}ms`;
  }
};
const onTransitionLeave = (componentElement, done) => {
  const element = componentElement;
  const { height } = getComputedStyle(element);
  leaveElementHeight = height;
  setTimeout(() => {
    done();
  }, properties.duration || 400);
};
const onTransitionEnter = (componentElement, done) => {
  const element = componentElement;
  const { width } = getComputedStyle(element);
  element.style.width = width;
  element.style.visibility = `hidden`;
  element.style.height = leaveElementHeight;
  setTimeout(() => {
    element.style.height = `auto`;
    const { height } = getComputedStyle(element);
    element.style.removeProperty("width");
    element.style.removeProperty("visibility");
    element.style.height = leaveElementHeight;
    getComputedStyle(element).height;
    requestAnimationFrame(() => {
      element.style.height = height;
    });
    setTimeout(() => {
      done();
    }, properties.duration || 400);
  }, 0);
};
const onTransitionAfterEnter = (componentElement) => {
  const element = componentElement;
  element.style.removeProperty("height");
};
</script>

<style lang="scss" src="./T-Replace.scss">

</style>
