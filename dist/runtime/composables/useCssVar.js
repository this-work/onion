import exportedCustomProperties from "../theme/export/index.module.scss";
export function useCssVar(name, prefix = "--") {
  return exportedCustomProperties[prefix + name];
}
