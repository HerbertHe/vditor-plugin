import {
    defineVditorPlugin,
    defineVditorPluginFeatures,
    defineVditorPluginRenderers,
    defineVditorPluginStyles,
} from "../src/helper"
import { WalkStatus } from "../src/types"

export const plugins = new Map([
    [
        "vditor-plugin-test",
        defineVditorPlugin({
            id: "vditor-plugin-test",
            compatible: "v3.8.1",
            options: {
                option1: "",
                option2: 3,
            },
            styles: defineVditorPluginStyles({
                teststyle1: "https://test-style.css",
            }),
            renderers: defineVditorPluginRenderers({
                renderToC: function (node, entering) {
                    return [JSON.stringify(node), WalkStatus.WalkContinue]
                },
            }),
            features: defineVditorPluginFeatures({
                codeRenderer: function (element, options) {
                    console.log(element, options)
                },
            }),
        }),
    ],
])
