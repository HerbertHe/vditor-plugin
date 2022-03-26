import type { ILuteRender, ILuteRenderCallback } from "./lute"

/**
 * Vditor Plugin Renderers Type
 */
export type VditorPluginRenderersType = Map<
    keyof ILuteRender,
    ILuteRenderCallback
>

/**
 * Vditor Plugin Styles Type
 */
export type VditorPluginStylesType = Map<string, string>

export interface IStringObject {
    [K: string]: string
}

/**
 * Vditor Plugin Options Type
 */
export type VditorPluginOptionsType<
    T extends string | number | symbol = string,
    V = string | number | symbol
> = {
    [K in T]: V
}

/**
 * Vditor Plugin Feature Type
 */
export interface VditorPluginFeatureFunc {
    (element?: HTMLElement, options?: VditorPluginOptionsType): void
}

/**
 * Vditor Plugin Feature Interface
 */
export interface IVditorPluginFeature {
    [K: string]: VditorPluginFeatureFunc
}

/**
 * Vditor Plugin Features Type
 */
export type VditorPluginFeaturesType = Map<string, VditorPluginFeatureFunc>

/**
 * Vditor Plugin Interface
 * @param id
 * @param compatible
 * @param renderers
 * @param styles
 */
export interface IVditorPlugin {
    // TODO drawer
    id: string
    compatible: string
    options?: VditorPluginOptionsType
    renderers?: VditorPluginRenderersType
    features?: VditorPluginFeaturesType
    styles?: VditorPluginStylesType
}

export type VditorPluginsType = Map<string, IVditorPlugin>
