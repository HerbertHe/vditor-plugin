import type {
    VditorPluginFeaturesType,
    VditorPluginRenderersType,
    VditorPluginStylesType,
    VditorPluginsType,
} from "./types"

/**
 * Load Plugins for Vditor
 * @param plugins
 * @returns
 */
export const loadVditorPlugins = (
    plugins: VditorPluginsType
) => {
    if (plugins.size === 0) {
        return
    }

    let vditorPluginStyles: VditorPluginStylesType = new Map<string, string>()
    let vditorPluginRenderers: VditorPluginRenderersType =
        new Map() as VditorPluginRenderersType
    let vditorPluginFeatures: VditorPluginFeaturesType =
        new Map() as VditorPluginFeaturesType

    for (let id of plugins.keys()) {
        const { renderers, features ,styles } = plugins.get(id)
        // Set Styles
        if (!!styles && styles.size !== 0) {
            ;[...styles].forEach(([styleID, styleUrl]) => {
                if (!!styleID && !!styleUrl) {
                    vditorPluginStyles.set(`${id}-style-${styleID}`, styleUrl)
                }
            })
        }

        // Set Renderers
        if (!!renderers && renderers.size !== 0) {
            // TODO 可能的 renderers 冲突, 对用户进行友好提示
            ;[...renderers].forEach(([key, cb]) => {
                if (!!key && !!cb) {
                    vditorPluginRenderers.set(key, cb)
                }
            })
        }

        // Set Features
        if (!!features && features.size !== 0) {
            // TODO 可能的 features 冲突, 对用户进行友好提示
            ;[...features].forEach(([key, fn]) => {
                if (!!key && !!fn) {
                    vditorPluginFeatures.set(key, fn)
                }
            })
        }
    }

    // loadVditorPluginsStyle(vditorPluginStyles)

    return {
        renderers: vditorPluginRenderers,
        features: vditorPluginFeatures
    }
}

/**
 * Load Vditor Plugin Styles
 * @param styles
 * @returns
 */
const loadVditorPluginsStyle = (styles: VditorPluginStylesType) => {
    // id : url
    if (!styles || styles.size === 0) {
        return
    }

    const head = document.head
    let styleLinks: Array<HTMLLinkElement> = []
    for (let id of styles.keys()) {
        const link = document.createElement("link") as HTMLLinkElement
        link.type = "text/css"
        link.rel = "stylesheet"
        link.id = id
        link.href = styles.get(id)
    }

    styleLinks.forEach((item) => {
        head.appendChild(item)
    })
}
