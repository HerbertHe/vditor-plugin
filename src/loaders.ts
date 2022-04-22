import type {
    IWindow,
    VditorPluginFeaturesType,
    VditorPluginRenderersType,
    VditorPluginStylesType,
    VditorPluginsType,
} from "./types"
import { convertPluginNameToBrowserFormat } from "./utils"

/**
 * Load Plugins for Vditor
 * @param plugins
 * @returns
 */
export const loadVditorPlugins = (plugins: VditorPluginsType) => {
    if (plugins.size === 0) {
        return
    }

    let vditorPluginStyles: VditorPluginStylesType = new Map<string, string>()
    let vditorPluginRenderers: VditorPluginRenderersType =
        new Map() as VditorPluginRenderersType
    let vditorPluginFeatures: VditorPluginFeaturesType =
        new Map() as VditorPluginFeaturesType

    for (let id of plugins.keys()) {
        const { renderers, features, styles } = plugins.get(id)
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

    return {
        renderers: vditorPluginRenderers,
        features: vditorPluginFeatures,
        styles: vditorPluginStyles
    }
}

/**
 * Load Vditor Plugin Styles
 * @param styles
 * @returns
 */
export const loadVditorPluginsStyle = (styles: VditorPluginStylesType) => {
    // id : url
    if (!styles || styles.size === 0) {
        return
    }

    const head = document.head
    let styleLinks: Array<HTMLLinkElement> = []
    for (let id of styles.keys()) {
        const href = styles.get(id)
        if (!href) {
            continue
        }

        const link = document.createElement("link") as HTMLLinkElement
        link.type = "text/css"
        link.rel = "stylesheet"
        link.id = id
        link.href = href
        styleLinks.push(link)
    }

    styleLinks.forEach((item) => {
        head.appendChild(item)
    })
}

/**
 * preload Vditor Plugins from remote
 * @param plugins
 */
export const preloadVditorPluginsFromRemote = (plugins: Array<string>) => {
    return Promise.allSettled(
        plugins
            .map((plugin: string) => {
                const pl = <IWindow>(
                    window[convertPluginNameToBrowserFormat(plugin)]
                )
                if (!!pl) {
                    return
                }

                return new Promise((resolve, reject) => {
                    const script = document.createElement("script")
                    // TODO jsDelivr
                    script.src = ``
                    script.onload = () => {
                        const pl = <IWindow>(
                            window[convertPluginNameToBrowserFormat(plugin)]
                        )
                        if (!!pl) {
                            ; (<IWindow>window).__vditor_plugins__[plugin] = pl
                            resolve([true, plugin])
                        } else {
                            reject([false, plugin])
                        }
                    }
                })
            })
            .filter((item) => !!item)
    )
}
