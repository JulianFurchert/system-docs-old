import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import * as Ui from "../../ui"

export function CheckboxButton({ width, text, scheme, checked, icon }) {
    return (
        <Ui.CheckboxButton
            text={text}
            scheme={scheme}
            checked={checked}
            width={width}
            icon={icon}
        />
    )
}

CheckboxButton.defaultProps = {
    width: 61,
    height: 25,
}

addPropertyControls(CheckboxButton, {
    text: {
        type: ControlType.String,
        defaultValue: "Button",
        placeholder: "Type something…",
    },
    scheme: {
        type: ControlType.Enum,
        defaultValue: "primary",
        options: ["primary", "secondary", "text"],
    },
    checked: {
        type: ControlType.Boolean,
        title: "checked",
        defaultValue: true,
    },
    icon: {
        type: ControlType.String,
        placeholder: "https://feathericons.com/",
    },
})
