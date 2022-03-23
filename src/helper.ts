import type {
    ILuteRender,
    IStringObject,
    IVditorPlugin,
    IVditorPluginFeature,
    VditorPluginFeaturesType,
    VditorPluginRenderersType,
    VditorPluginStylesType,
} from "./types"

/**
 * Vditor Plugin Definition Helper
 * @param plugin
 */
export const defineVditorPlugin = (plugin: IVditorPlugin) => {
    plugin.compatible = plugin.compatible.replace(/[ |v]/g, "")
    return plugin
}

const defineFn = <
    T extends ILuteRender | IVditorPluginFeature,
    P extends VditorPluginRenderersType | VditorPluginFeaturesType
>(
    param: T
): P => {
    let _tmp = []
    for (let k of Object.keys(param)) {
        _tmp.push([k, param[k]])
    }
    return new Map(_tmp) as P
}

/**
 * Vditor Plugin Renderers Definition Helper
 * @returns
 */
export const defineVditorPluginRenderers = defineFn

/**
 * Vditor Plugin Features Definition Helper
 * @returns
 */
export const defineVditorPluginFeatures = defineFn

/**
 * Vditor Plugin Styles Definition Helper
 * @returns
 */
export const defineVditorPluginStyles = <T = IStringObject>(
    styles: T
): VditorPluginStylesType => {
    let _tmp = []
    for (let k of Object.keys(styles)) {
        _tmp.push([k, styles[k]])
    }
    return new Map(_tmp) as VditorPluginStylesType
}
