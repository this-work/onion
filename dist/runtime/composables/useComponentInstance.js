import { getCurrentInstance } from "vue";
export function useComponentInstance(componentInstance = getCurrentInstance()) {
  const splittetFilePath = componentInstance.type.__file.split("/");
  const fileName = splittetFilePath[splittetFilePath.length - 1];
  const componentName = fileName.substring(0, fileName.length - 4).toLowerCase();
  return {
    componentName
  };
}
