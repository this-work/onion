import type { Slot } from 'vue';
export interface Component {
    name: string;
    data: Array<any>;
    slots: Slot[];
}
