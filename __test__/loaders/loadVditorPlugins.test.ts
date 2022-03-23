import { loadVditorPlugins } from "../../src/loaders"
import { plugins } from "../TestPlugin"

test("test load Vditor Plugins", () => {
    const { renderers, features } = loadVditorPlugins(plugins)
    const renderResult = renderers
        .get("renderToC")
        .call(null, "test-node", false)

    const featureResult = features.get("codeRenderer").call(null, "<a></a>", {})
})
