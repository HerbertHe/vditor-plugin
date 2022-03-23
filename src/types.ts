/**
 * Type Definition from Vditor
 * TODO: Keep up to date
 * @link https://github.com/Vanessa219/vditor/blob/master/types/index.d.ts#L13
 * @license MIT
 */
interface ILuteNode {
    TokensStr: () => string
    __internal_object__: {
        Parent: {
            Type: number
        }
        HeadingLevel: string
    }
}

/**
 * Lute Node Walk Status
 */
export enum WalkStatus {
    WalkStop = 0,
    WalkSkipChildren = 1,
    WalkContinue = 2
}

type ILuteRenderCallback = (
    node: ILuteNode,
    entering: boolean
) => [string, WalkStatus]

/** @link https://ld246.com/article/1588412297062 */
interface ILuteRender {
    renderDocument?: ILuteRenderCallback
    renderParagraph?: ILuteRenderCallback
    renderText?: ILuteRenderCallback
    renderCodeBlock?: ILuteRenderCallback
    renderCodeBlockOpenMarker?: ILuteRenderCallback
    renderCodeBlockInfoMarker?: ILuteRenderCallback
    renderCodeBlockCode?: ILuteRenderCallback
    renderCodeBlockCloseMarker?: ILuteRenderCallback
    renderMathBlock?: ILuteRenderCallback
    renderMathBlockOpenMarker?: ILuteRenderCallback
    renderMathBlockContent?: ILuteRenderCallback
    renderMathBlockCloseMarker?: ILuteRenderCallback
    renderBlockquote?: ILuteRenderCallback
    renderBlockquoteMarker?: ILuteRenderCallback
    renderHeading?: ILuteRenderCallback
    renderHeadingC8hMarker?: ILuteRenderCallback
    renderList?: ILuteRenderCallback
    renderListItem?: ILuteRenderCallback
    renderTaskListItemMarker?: ILuteRenderCallback
    renderThematicBreak?: ILuteRenderCallback
    renderHTML?: ILuteRenderCallback
    renderTable?: ILuteRenderCallback
    renderTableHead?: ILuteRenderCallback
    renderTableRow?: ILuteRenderCallback
    renderTableCell?: ILuteRenderCallback
    renderFootnotesDef?: ILuteRenderCallback
    renderCodeSpan?: ILuteRenderCallback
    renderCodeSpanOpenMarker?: ILuteRenderCallback
    renderCodeSpanContent?: ILuteRenderCallback
    renderCodeSpanCloseMarker?: ILuteRenderCallback
    renderInlineMath?: ILuteRenderCallback
    renderInlineMathOpenMarker?: ILuteRenderCallback
    renderInlineMathContent?: ILuteRenderCallback
    renderInlineMathCloseMarker?: ILuteRenderCallback
    renderEmphasis?: ILuteRenderCallback
    renderEmAsteriskOpenMarker?: ILuteRenderCallback
    renderEmAsteriskCloseMarker?: ILuteRenderCallback
    renderEmUnderscoreOpenMarker?: ILuteRenderCallback
    renderEmUnderscoreCloseMarker?: ILuteRenderCallback
    renderStrong?: ILuteRenderCallback
    renderStrongA6kOpenMarker?: ILuteRenderCallback
    renderStrongA6kCloseMarker?: ILuteRenderCallback
    renderStrongU8eOpenMarker?: ILuteRenderCallback
    renderStrongU8eCloseMarker?: ILuteRenderCallback
    renderStrikethrough?: ILuteRenderCallback
    renderStrikethrough1OpenMarker?: ILuteRenderCallback
    renderStrikethrough1CloseMarker?: ILuteRenderCallback
    renderStrikethrough2OpenMarker?: ILuteRenderCallback
    renderStrikethrough2CloseMarker?: ILuteRenderCallback
    renderHardBreak?: ILuteRenderCallback
    renderSoftBreak?: ILuteRenderCallback
    renderInlineHTML?: ILuteRenderCallback
    renderLink?: ILuteRenderCallback
    renderOpenBracket?: ILuteRenderCallback
    renderCloseBracket?: ILuteRenderCallback
    renderOpenParen?: ILuteRenderCallback
    renderCloseParen?: ILuteRenderCallback
    renderLinkText?: ILuteRenderCallback
    renderLinkSpace?: ILuteRenderCallback
    renderLinkDest?: ILuteRenderCallback
    renderLinkTitle?: ILuteRenderCallback
    renderImage?: ILuteRenderCallback
    renderBang?: ILuteRenderCallback
    renderEmoji?: ILuteRenderCallback
    renderEmojiUnicode?: ILuteRenderCallback
    renderEmojiImg?: ILuteRenderCallback
    renderEmojiAlias?: ILuteRenderCallback
    renderToC?: ILuteRenderCallback
    renderFootnotesRef?: ILuteRenderCallback
    renderBackslash?: ILuteRenderCallback
    renderBackslashContent?: ILuteRenderCallback
}

/**
 * Vditor Plugin Renderers Type
 */
export type IVditorPluginRenderers = Map<keyof ILuteRender, ILuteRenderCallback>

/**
 * Vditor Plugin Styles Type
 */
export type IVditorPluginStyles = Map<string, string>

/**
 * Vditor Plugin Interface
 * @param id
 * @param compatible
 * @param renderers
 * @param styles
 */
export interface IVditorPlugin {
    // TODO features, drawer
    id: string
    compatible: string
    renderers?: IVditorPluginRenderers
    styles?: IVditorPluginStyles
}

export type VditorPluginsType = Map<string, IVditorPlugin>
