import { IVditorPlugin } from "./types"

/**
 * Vditor Plugin Definition Helper
 * @param plugin
 */
export const defineVditorPlugin = (plugin: IVditorPlugin) => {
    plugin.compatible = plugin.compatible.replace(/[ |v]/g, "")
    return
}
