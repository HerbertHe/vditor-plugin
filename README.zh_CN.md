# Vditor 插件

[![version](https://img.shields.io/npm/v/vditor-plugin.svg)](https://www.npmjs.com/package/vditor-plugin)
[![download](https://img.shields.io/npm/dm/vditor-plugin.svg)](https://www.npmjs.com/package/vditor-plugin)

为 Vditor 插件开发准备的 Vditor插件开发助手！

[简体中文](./README.zh_CN.md) | [English](./README.md)

## 快速上手

### 为插件开发者准备的

如果你仅专注于 Vditor 插件开发, 了解下面的 API 就足够了！

```ts
import { defineVditorPlugin } from "vditor-plugin"

export default defineVditorPlugin({
    id: "vditor-plugin-example",
    compatible: "1.3.2"
})
```

`defineVditorPlugin` API 的参数：

| 参数       | 必需  | 类型                                          | 参数说明                                 |
| ---------- | :---: | --------------------------------------------- | ---------------------------------------- |
| id         |   √   | `/vditor\-plugin\-([a-z0-9]+)/`               | 插件的唯一标识符 (与 npm 的包名保持一致) |
| compatible |   √   | [CompatibleType](#CompatibleType)             | 兼容 Vditor 的版本范围                   |
| renderers  |   ×   | `Map<keyof ILuteRender, ILuteRenderCallback>` | 自定义 Vditor 渲染器                     |
| styles     |   ×   | `Map<string, string>` (样式表标识符，链接)    | 自定义 Vditor 样式表                     |

#### CompatibleType

- "version"
- ">version"
- "\<version"
- ">=version"
- "<=version"
- "*"
- "version1-version2"(包含 version1, version2)

### 为 Vditor 开发者准备的

如果你在做 Vditor 项目的开发, 你还需要了解下面的 API：

```ts
import { checkVditorPluginCompatible, checkVditorPluginIdentifier } from "vditor-plugin"

checkVditorPluginCompatible(">1.3.0", "1.3.1")
// => [true, "1.3.1", "1.3.1"]

checkVditorPluginIdentifier("vditor-plugin-test")
// => [true, "vditor-plugin-test"]
```

- `checkVditorPluginCompatible(compatible: string, vditor_version: string)`: 检查插件是否兼容特定的 Vditor 版本
- `checkVditorPluginIdentifier(identifier: string)`: 检查插件的标识符是否是合法的

## 许可证

[MIT](./LICENSE)
