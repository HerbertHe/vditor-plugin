export const convertPluginNameToBrowserFormat = (pn: string) =>
    `__${pn.replace(/\-/g, "_")}__`
