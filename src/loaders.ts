import type {
    IVditorPluginRenderers,
    IVditorPluginStyles,
    VditorPluginsType,
} from "./types"

export const loadVditorPlugins = (plugins: VditorPluginsType): IVditorPluginRenderers => {
    if (plugins.size === 0) {
        return
    }

    let vditorPluginStyles: IVditorPluginStyles = new Map<string, string>()
    let vditorPluginRenderers: IVditorPluginRenderers =
        new Map() as IVditorPluginRenderers

    for (let id of plugins.keys()) {
        const { renderers, styles } = plugins.get(id)
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
    }

    loadVditorPluginsStyle(vditorPluginStyles)

    return vditorPluginRenderers
}

/**
 * Load Vditor Plugin Styles
 * @param styles
 * @returns
 */
const loadVditorPluginsStyle = (styles: IVditorPluginStyles) => {
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
