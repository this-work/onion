import { h } from "vue";
export default function Wrap({ wrapper }, { slots, attrs }) {
  return wrapper ? h(wrapper, attrs, slots.default()) : slots.default();
}
Wrap.props = ["wrapper"];
