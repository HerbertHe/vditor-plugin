import { IVditorPlugin } from "./plugin"

export interface IVditor extends IVditorHooks {
    use: () => IVditor
    // render: () => void
}

export interface IVditorHooks {
    /**
     * Vditor Plugins Preload Queue
     */
    _vditor_plugins_preload_queue: Set<string>
    _vditor_plugins: Set<IVditorPlugin>
}
