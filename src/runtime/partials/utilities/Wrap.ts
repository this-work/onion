import { h } from 'vue'

/**
 * A utility component that conditionally wraps content in a wrapper element.
 * Inspired by: https://dev.to/alexander-nenashev/creating-a-conditional-wrap-component-in-vue-3-18ml
 *
 * @param {object} props - Component props
 * @param {any} props.wrapper - The wrapper element/component to wrap the content with
 * @param {object} context - Component context
 * @param {object} context.slots - Slots object containing default slot
 * @param {object} context.attrs - Attributes to pass to the wrapper element
 * @returns {VNode} Either the wrapped content or the raw content if no wrapper is provided
 */
export default function Wrap({ wrapper }: { wrapper: any }, { slots, attrs }: { slots: any, attrs: any }) {
  return wrapper ? h(wrapper, attrs, slots.default()) : slots.default()
}

/**
 * Component props definition
 */
Wrap.props = ['wrapper']
