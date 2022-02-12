import { defineConfig } from "tsup"

export const tsup = defineConfig({
    entry: ["src/index.ts"],
    clean: true,
	format: ["esm"],
    dts: true,
    outDir: "dist"
})
