# vditor-plugin

Vditor plugin helper for Vditor Plugin Development!

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

| Argument   | Required | Type                              | Description                  |
| ---------- | :------: | --------------------------------- | ---------------------------- |
| id         |    √     | `/vditor-plugin-([a-z0-9]+)/`     | Unique identifier of plugin  |
| compatible |    √     | [CompatibleType](#CompatibleType) | Compatible version of Vditor |
| renderers  |    ×     |                                   |                              |
| styles     |    ×     |                                   |                              |

#### CompatibleType

- "version"
- ">version"
- "\<version"
- ">=version"
- "<=version"
- "*"
- "version1-version2"(including version1, version2)

### For Vditor Developer
