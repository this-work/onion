import * as _nuxt_schema from '@nuxt/schema';
export * from '../dist/runtime/types/index.js';

interface ModuleOptions {
    theme?: {
        config?: string;
        css?: string;
    };
}

declare const _default: _nuxt_schema.NuxtModule<ModuleOptions, ModuleOptions, false>;

export { _default as default };
export type { ModuleOptions };
