import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import * as Ui from "../../ui"

export function Button({ width, text, variant, scheme, size }) {
    return (
        <Ui.Button
            text={text}
            variant={variant}
            scheme={scheme}
            size={size}
            width={width}
        >
            Example
        </Ui.Button>
    )
}

Button.defaultProps = {
    width: 61,
    height: 25,
}

addPropertyControls(Button, {
    text: {
        type: ControlType.String,
        defaultValue: "Button",
        placeholder: "Type something…",
    },
    variant: {
        type: ControlType.Enum,
        defaultValue: "fill",
        options: ["fill", "outline", "ghost"],
    },
    scheme: {
        type: ControlType.Enum,
        defaultValue: "primary",
        options: ["primary", "secondary", "text"],
    },
    size: {
        type: ControlType.Enum,
        defaultValue: "default",
        options: ["default", "large"],
    },
})
