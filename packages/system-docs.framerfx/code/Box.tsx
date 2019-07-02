import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import * as Ui from "../../ui"

const COLORS = [
    "primary.1",
    "secondary.1",
    "text.1",
    "background",
    "sidebar",
    "block",
]
const STYLES = [
    "none",
    "smallComponents",
    "mediumComponents",
    "largeComponents",
]

export function Box({
    width,
    height,
    bg,
    radii,
    border,
    borderColor,
    boxShadow,
}) {
    return (
        <Ui.Box
            width={width}
            height={height}
            bg={bg}
            borderRadius={radii}
            border={border}
            borderColor={borderColor}
            boxShadow={boxShadow}
        />
    )
}

Box.defaultProps = {
    width: 100,
    height: 100,
}

addPropertyControls(Box, {
    bg: {
        type: ControlType.Enum,
        defaultValue: "primary.1",
        options: COLORS,
    },
    radii: {
        type: ControlType.Enum,
        defaultValue: "none",
        options: STYLES,
    },
    boxShadow: {
        type: ControlType.Enum,
        defaultValue: "none",
        options: STYLES,
    },
    border: {
        type: ControlType.Enum,
        defaultValue: "0",
        options: ["0", "1"],
    },
    borderColor: {
        type: ControlType.Enum,
        defaultValue: "primary.1",
        options: COLORS,
    },
})
