import { checkVditorPluginIdentifier } from "../../src/checker"

test("Vditor Plugin Identifier check should be passed!", () => {
    expect(checkVditorPluginIdentifier("vditor-plugin-test")[0]).toBe(true)
})

test("Vditor Plugin Identifier check should not be passed!", () => {
    expect(checkVditorPluginIdentifier("vditor-plugin-")[0]).toBe(false)
})

test("Vditor Plugin Identifier check should not be passed!", () => {
    expect(checkVditorPluginIdentifier("vditor-plugin-12_243")[0]).toBe(false)
})

test("Vditor Plugin Identifier check should not be passed!", () => {
    expect(checkVditorPluginIdentifier("vditor-plugin-AC5v")[0]).toBe(false)
})
