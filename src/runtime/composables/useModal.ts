import { readonly, ref, computed } from 'vue'

/**
 * Interface representing the state of a modal
 * @interface ModalComposableProperties
 * @property {boolean} isOpen - Indicates if the modal is currently displayed
 * @property {number} level - The stack level of the modal
 */
export interface ModalComposableProperties {
  isOpen: boolean
  level: number
}

/** Stack to maintain the order of opened modals */
const modalStack = ref<string[]>([])
/** Map to store the state of all modals */
const modals = ref(new Map<string, ModalComposableProperties>())
/** Counter for generating unique modal IDs */
let modalCount = 0

/**
 * Generates a unique numerical ID for modals
 * @returns {number} Unique modal identifier
 */
function getModalNumber() {
  modalCount++
  return modalCount
}

/**
 * Composable for managing modal state and behavior
 * @param {string} modalId - Unique identifier for the modal, defaults to auto-generated number
 * @returns {object} Modal control methods and state
 */
export function useModal(modalId: string = getModalNumber().toString()) {
  /**
   * Opens the modal and adds it to the stack
   */
  const open = () => {
    const level = modalStack.value.length
    modals.value.set(modalId, { isOpen: true, level })
    modalStack.value.push(modalId)
  }

  /**
   * Closes the modal and removes it from the stack
   */
  const close = () => {
    modals.value.delete(modalId)
    const index = modalStack.value.indexOf(modalId)
    if (index !== -1) {
      modalStack.value.splice(index, 1)
    }
  }

  /**
   * Gets the current state of the modal
   * @returns {ModalComposableProperties | undefined} Current modal state if exists
   */
  const getState = () => modals.value.get(modalId)

  /** Computed property indicating if modal is open */
  const isOpen = computed(() => !!modals.value.get(modalId)?.isOpen)
  /** Computed property for modal stack level */
  const level = computed(() => modals.value.get(modalId)?.level ?? 0)

  /**
   * @returns {object} Object containing modal controls and state
   * @property {Function} open - Opens the modal
   * @property {Function} close - Closes the modal
   * @property {Function} getState - Gets current modal state
   * @property {ComputedRef<boolean>} isOpen - Whether modal is open
   * @property {ComputedRef<number>} level - Modal's stack level
   * @property {ComputedRef<string[]>} modalStack - Current modal stack
   */
  return {
    open,
    close,
    getState,
    isOpen: readonly(isOpen),
    level: readonly(level),
    modalStack: readonly(modalStack),
  }
}
