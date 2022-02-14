import { checkVditorPluginCompatible } from "../../src/checker"

test("should not be compatible!", () => {
    expect(checkVditorPluginCompatible("1.3.1", "1.2.3")[0]).toBe(false)
})

test("should be compatible!", () => {
    expect(checkVditorPluginCompatible("1.3.1", "1.3.1")[0]).toBe(true)
})

test("should be compatible!", () => {
    expect(checkVditorPluginCompatible(">1.3.1", "1.3.2")[0]).toBe(true)
})

test("should not be compatible!", () => {
    console.log(checkVditorPluginCompatible(">1.3.1", "1.3.1"))
    expect(checkVditorPluginCompatible(">1.3.1", "1.3.1")[0]).toBe(false)
})

test("should be compatible!", () => {
    expect(checkVditorPluginCompatible(">=1.3.1", "1.3.1")[0]).toBe(true)
})

test("should not be compatible!", () => {
    expect(checkVditorPluginCompatible(">=1.3.1", "1.3.0")[0]).toBe(false)
})

test("should be compatible!", () => {
    expect(checkVditorPluginCompatible("<1.3.1", "1.3.0")[0]).toBe(true)
})

test("should not be compatible!", () => {
    expect(checkVditorPluginCompatible("<1.3.1", "1.4.0")[0]).toBe(false)
})

test("should be compatible!", () => {
    expect(checkVditorPluginCompatible("<=1.3.1", "1.3.1")[0]).toBe(true)
})

test("should not be compatible!", () => {
    expect(checkVditorPluginCompatible("<=1.3.1", "1.3.2")[0]).toBe(false)
})

test("should be compatible!", () => {
    expect(checkVditorPluginCompatible("1.2.3-1.2.5", "1.2.3")[0]).toBe(true)
})

test("should be compatible!", () => {
    expect(checkVditorPluginCompatible("1.2.3-1.2.5", "1.2.4")[0]).toBe(true)
})

test("should be compatible!", () => {
    expect(checkVditorPluginCompatible("1.2.3-1.2.5", "1.2.5")[0]).toBe(true)
})

test("should not be compatible!", () => {
    expect(checkVditorPluginCompatible("1.2.3-1.2.5", "1.2.6")[0]).toBe(false)
})

test("should not be compatible!", () => {
    expect(checkVditorPluginCompatible("1.2.3-1.2.1", "1.3.2")[0]).toBe(false)
})
