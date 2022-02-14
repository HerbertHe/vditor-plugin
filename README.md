# vditor-plugin

[![version](https://img.shields.io/npm/v/vditor-plugin.svg)](https://www.npmjs.com/package/vditor-plugin)
[![download](https://img.shields.io/npm/dm/vditor-plugin.svg)](https://www.npmjs.com/package/vditor-plugin)

Vditor plugin helper for Vditor Plugin Development!

[简体中文](./README.zh_CN.md) | [English](./README.md)

## Get Started

### For Plugin Developer

If you are just working for Vditor plugin development, just focus on the API below:

```ts
import { defineVditorPlugin } from "vditor-plugin"

export default defineVditorPlugin({
    id: "vditor-plugin-example",
    compatible: "1.3.2"
})
```

Arguments of `defineVditorPlugin` API:

| Argument   | Required | Type                                          | Description                                                   |
| ---------- | :------: | --------------------------------------------- | ------------------------------------------------------------- |
| id         |    √     | `/vditor\-plugin\-([a-z0-9]+)/`               | Unique identifier of plugin (Consistent with npm packge name) |
| compatible |    √     | [CompatibleType](#CompatibleType)             | Compatible version of Vditor                                  |
| renderers  |    ×     | `Map<keyof ILuteRender, ILuteRenderCallback>` | Custom Vditor renderers                                       |
| styles     |    ×     | `Map<string, string>` (id, url)               | Custom Vditor Stylesheets                                     |

#### CompatibleType

- "version"
- ">version"
- "\<version"
- ">=version"
- "<=version"
- "*"
- "version1-version2"(including version1, version2)

### For Vditor Developer

If you are working for Vditor development, you also need to know the following APIs:

```ts
import { checkVditorPluginCompatible, checkVditorPluginIdentifier } from "vditor-plugin"

checkVditorPluginCompatible(">1.3.0", "1.3.1")
// => [true, "1.3.1", "1.3.1"]

checkVditorPluginIdentifier("vditor-plugin-test")
// => [true, "vditor-plugin-test"]
```

- `checkVditorPluginCompatible(compatible: string, vditor_version: string)`: Check if the plugin is compatible with the specific version of Vditor
- `checkVditorPluginIdentifier(identifier: string)`: Check if the identifier of the plugin is valid

## License

[MIT](./LICENSE)
