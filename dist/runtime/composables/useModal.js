import { readonly, ref, computed } from "vue";
const modalStack = ref([]);
const modals = ref(/* @__PURE__ */ new Map());
let modalCount = 0;
function getModalNumber() {
  modalCount++;
  return modalCount;
}
export function useModal(modalId = getModalNumber().toString()) {
  const open = () => {
    const level2 = modalStack.value.length;
    modals.value.set(modalId, { isOpen: true, level: level2 });
    modalStack.value.push(modalId);
  };
  const close = () => {
    modals.value.delete(modalId);
    const index = modalStack.value.indexOf(modalId);
    if (index !== -1) {
      modalStack.value.splice(index, 1);
    }
  };
  const getState = () => modals.value.get(modalId);
  const isOpen = computed(() => !!modals.value.get(modalId)?.isOpen);
  const level = computed(() => modals.value.get(modalId)?.level ?? 0);
  return {
    open,
    close,
    getState,
    isOpen: readonly(isOpen),
    level: readonly(level),
    modalStack: readonly(modalStack)
  };
}
