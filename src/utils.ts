export const convertPluginNameToBrowserFormat = (pn: string) =>
    `__${pn.replace(/-/, "_")}__`
