import type { IVditor, IVditorPlugin, IWindow } from "../types"

/**
 * Vditor Use hook
 * @param plugins
 * @returns
 */
export function VditorUse(
    this: IVditor,
    plugins: string | IVditorPlugin | Array<string> | Array<IVditorPlugin>
) {
    if (!!plugins) {
        return
    }

    if (typeof plugins === "string") {
        // TODO handle single `iife` plugin
        // preload from jsDelivr CDN, need the plugin was built as iife format windows.__vditor_plugins__.<plugin-id>
        this._vditor_plugins_preload_queue.add(plugins)
        // TODO register to Vditor instance after loaded
    }

    if (typeof plugins === "object" && !Array.isArray(plugins)) {
        // register plugins to Vditor instance
        this._vditor_plugins.add(plugins)
    }

    if (Array.isArray(plugins)) {
        if (plugins.length === 0) {
            return
        }

        if (typeof plugins[0] === "string") {
            // TODO handle `iife` plugins
            this._vditor_plugins_preload_queue = new Set([
                ...this._vditor_plugins_preload_queue,
                ...(<Array<string>>plugins),
            ])
            // TODO register to Vditor instance after loaded
        }

        if (typeof plugins[0] === "object" && !Array.isArray(plugins[0])) {
            this._vditor_plugins = new Set([
                ...this._vditor_plugins,
                ...(<Array<IVditorPlugin>>plugins),
            ])
        }
    }
}
