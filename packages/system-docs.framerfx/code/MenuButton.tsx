import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import * as Ui from "../../ui"

export function MenuButton({ width, text, active, scheme }) {
    return (
        <Ui.MenuButton
            text={text}
            width={width}
            active={active}
            scheme={scheme}
        />
    )
}

MenuButton.defaultProps = {
    width: 140,
    height: 35,
}

addPropertyControls(MenuButton, {
    text: {
        type: ControlType.String,
        defaultValue: "Menu List",
        placeholder: "Type something…",
    },
    scheme: {
        type: ControlType.Enum,
        defaultValue: "primary",
        options: ["primary", "secondary", "text"],
    },
    active: {
        type: ControlType.Boolean,
        title: "active",
        defaultValue: false,
    },
})
