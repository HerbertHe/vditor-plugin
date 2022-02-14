/**
 * Vditor Plugin Checker
 */

/**
 * VersionNumberComparison
 * @param v1
 * @param v2
 * @returns
 */
function VersionNumberComparison(
    v1: [string, string, string],
    v2: string
): ">" | "<" | "=" {
    const [v21, v22, v23] = v2.split(".").map((item) => parseInt(item))
    const [v11, v12, v13] = v1.map((item) => parseInt(item))

    if (v21 > v11) {
        return ">"
    } else if (v21 < v11) {
        return "<"
    } else {
        if (v22 > v12) {
            return ">"
        } else if (v22 < v12) {
            return "<"
        } else {
            if (v23 > v13) {
                return ">"
            } else if (v23 < v13) {
                return "<"
            } else {
                return "="
            }
        }
    }
}

/**
 * Vditor Plugin Compatible Checker
 * @param {string} compatible Vditor Plugin Compatible Version
 * @param {string} vditor_version Current Vditor Version
 *
 * Rules:
 * - "version"
 * - ">version"
 * - "<version"
 * - ">=version"
 * - "<=version"
 * - "*"
 * - "version1-version2"
 */
export const checkVditorPluginCompatible = (
    compatible: string,
    vditor_version: string
): [boolean, string, string] => {
    // Replace All Spaces
    compatible = compatible.replace(/ /g, "")

    // Check Vditor Version
    const ValidVersionRegExp = /^([0-9]+)\.([0-9]+)\.([0-9]+)$/
    if (!ValidVersionRegExp.test(vditor_version)) {
        throw new Error("Invalid Vditor Version!")
    }

    // Check if compatible == "*""
    if (compatible === "*") {
        return [true, compatible, vditor_version]
    }

    /**
     * Check if the format of `compatible` as followed:
     * - "version"
     * - ">version"
     * - "<version"
     * - ">=version"
     * - "<=version"
     */
    const SingleVersionRegExp = /^([>|<|=]+)?([0-9]+)\.([0-9]+)\.([0-9]+)$/

    /**
     * Check if the format of `compatible` as followed:
     * - "version1-version2"
     */
    const MultiVersionRegExp =
        /^([0-9]+)\.([0-9]+)\.([0-9]+)(\-)([0-9]+)\.([0-9]+)\.([0-9]+)$/

    // Check compatible format
    if (
        !SingleVersionRegExp.test(compatible) &&
        !MultiVersionRegExp.test(compatible)
    ) {
        return [false, compatible, vditor_version]
    }

    if (!MultiVersionRegExp.test(compatible)) {
        const [basic_raw, basic_comparison_symbol, b1, b2, b3] =
            SingleVersionRegExp.exec(compatible)
        // Check when single
        if (!!basic_comparison_symbol) {
            let _ans: [boolean, string, string] = [
                false,
                compatible,
                vditor_version,
            ]
            switch (basic_comparison_symbol) {
                case ">": {
                    if (
                        VersionNumberComparison(
                            [b1, b2, b3],
                            vditor_version
                        ) === ">"
                    ) {
                        _ans = [true, compatible, vditor_version]
                    }
                    break
                }
                case ">=": {
                    if (
                        [">", "="].includes(
                            VersionNumberComparison(
                                [b1, b2, b3],
                                vditor_version
                            )
                        )
                    ) {
                        _ans = [true, compatible, vditor_version]
                    }
                    break
                }
                case "<": {
                    if (
                        VersionNumberComparison(
                            [b1, b2, b3],
                            vditor_version
                        ) === "<"
                    ) {
                        _ans = [true, compatible, vditor_version]
                    }
                    break
                }
                case "<=": {
                    if (
                        ["<", "="].includes(
                            VersionNumberComparison(
                                [b1, b2, b3],
                                vditor_version
                            )
                        )
                    ) {
                        _ans = [true, compatible, vditor_version]
                    }
                    break
                }
            }

            return _ans
        } else {
            if (basic_raw === vditor_version) {
                return [true, compatible, vditor_version]
            } else {
                return [false, compatible, vditor_version]
            }
        }
    } else {
        // Only Support version1-version2 format
        const [s_raw, b1, b2, b3, connect, s1, s2, s3] =
            MultiVersionRegExp.exec(compatible)
        if (connect === "-") {
            if (
                [">", "="].includes(
                    VersionNumberComparison([b1, b2, b3], vditor_version)
                ) &&
                ["<", "="].includes(
                    VersionNumberComparison([s1, s2, s3], vditor_version)
                )
            ) {
                return [true, compatible, vditor_version]
            } else {
                return [false, compatible, vditor_version]
            }
        } else {
            return [false, compatible, vditor_version]
        }
    }
}

export const VditorPluginIdentifierRegExp = /^vditor\-plugin\-([a-z0-9]+)$/

/**
 * Vditor Plugin Identifier Checker
 * @param {string} id plugin identifier
 * @returns
 */
export const checkVditorPluginIdentifier = (id: string) => {
    if (!VditorPluginIdentifierRegExp.test(id)) {
        return [false, id]
    }

    return [true, id]
}
