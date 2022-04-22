import { defineConfig } from "tsup"

export const tsup = defineConfig({
    entry: {
        "index": "src/index.ts",
        "types": "src/types/index.ts",
    },
    clean: true,
    format: ["esm", "cjs"],
    dts: true,
    outDir: "dist",
    minify: true
})
