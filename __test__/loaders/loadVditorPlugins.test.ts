import { loadVditorPlugins } from "../../src/loaders"
import {
    IVditorPlugin,
    VditorPluginsType,
    IVditorPluginRenderers,
    WalkStatus,
} from "../../src/types"

// test("test load Vditor Plugins", () => {
//     const plugins: VditorPluginsType = new Map<string, IVditorPlugin>([
//         [
//             "vditor-plugin-test",
//             {
//                 id: "vditor-plugin-test",
//                 compatible: "v3.8.1",
//                 styles: new Map<string, string>([
//                     ["test-style1", "https://test-style.css"],
//                 ]),
//                 renderers: new Map([
//                     [
//                         "renderToC",
//                         function (node, entering) {
//                             return [
//                                 JSON.stringify(node),
//                                 WalkStatus.WalkContinue,
//                             ]
//                         },
//                     ],
//                 ]) as IVditorPluginRenderers,
//             },
//         ],
//     ])

//     const renderers = loadVditorPlugins(plugins)

//     expect(renderers.get("renderToC").call(null, "test-node", false)).toEqual([
//         JSON.stringify("test-node"),
//         2,
//     ])
// })
