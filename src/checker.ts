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
): [boolean, string] => {
    // Replace All Spaces
    compatible = compatible.replace(/ /g, "")

    // Check Vditor Version
    const ValidVersionRegExp = /^([0-9]+)\.([0-9]+)\.([0-9]+)$/
    if (!ValidVersionRegExp.test(vditor_version)) {
        throw new Error("Invalid Vditor Vesion!")
    }

    // Check if compatible == "*""
    if (compatible === "*") {
        return [true, compatible]
    }

    const VersionRegExp =
        /(([>|<|=]+)?([0-9]+)\.([0-9]+)\.([0-9]+))(([\-])?(([>|<|=]+)?([0-9]+)\.([0-9]+)\.([0-9]+)))?/

    // Check compatible format
    if (!VersionRegExp.test(compatible)) {
        return [false, compatible]
    }

    // Get values
    const [
        raw,
        basic_raw,
        basic_comparison_symbol,
        b1,
        b2,
        b3,
        second_exist,
        connect,
        second_raw,
        second_comparison_symbol,
        s1,
        s2,
        s3,
    ] = VersionRegExp.exec(compatible)

    if (!second_exist) {
        // Check when single
        if (!!basic_comparison_symbol) {
            switch (basic_comparison_symbol) {
                case ">": {
                    if (
                        VersionNumberComparison(
                            [b1, b2, b3],
                            vditor_version
                        )[0] === ">"
                    ) {
                        return [true, compatible]
                    }
                }
                case ">=": {
                    if (
                        [">", "="].includes(
                            VersionNumberComparison(
                                [b1, b2, b3],
                                vditor_version
                            )[0]
                        )
                    ) {
                        return [true, compatible]
                    }
                }
                case "<": {
                    if (
                        VersionNumberComparison(
                            [b1, b2, b3],
                            vditor_version
                        )[0] === "<"
                    ) {
                        return [true, compatible]
                    }
                }
                case "<=": {
                    if (
                        ["<", "="].includes(
                            VersionNumberComparison(
                                [b1, b2, b3],
                                vditor_version
                            )[0]
                        )
                    ) {
                        return [true, compatible]
                    }
                }
            }

            return [false, compatible]
        } else {
            if (basic_raw === vditor_version) {
                return [true, compatible]
            } else {
                return [false, compatible]
            }
        }
    } else {
        // TODO
    }
}
