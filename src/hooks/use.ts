import type { IVditorPlugin } from "../types"

/**
 * Vditor Use hook
 * @param plugins
 * @returns
 */
export const VditorUse = (
    plugins: string | IVditorPlugin | Array<string> | Array<IVditorPlugin>
) => {
    if (!!plugins) {
        return
    }

    if (typeof plugins === "string") {
        // TODO handle single `iife` plugin
        // loader from CDN, need the plugin was built as iife format
    }

    if (typeof plugins === "object" && !Array.isArray(plugins)) {
        // TODO handle single `esm` plugin
    }

    if (Array.isArray(plugins)) {
        if (plugins.length === 0) {
            return
        }

        if (typeof plugins[0] === "string") {
            // TODO handle `iife` plugins
        }

        if (typeof plugins[0] === "object" && !Array.isArray(plugins[0])) {
            // TODO handle `esm` plugins
        }
    }
}
