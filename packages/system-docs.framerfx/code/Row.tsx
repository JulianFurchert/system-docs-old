import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import * as Ui from "../../ui"

export function Row({ value, token, width, height }) {
    return <Ui.Row token={token} value={value} width={width} height={height} />
}

Row.defaultProps = {
    width: 150,
    height: 35,
}

addPropertyControls(Row, {
    token: {
        type: ControlType.String,
        defaultValue: "Token",
    },
    value: {
        type: ControlType.String,
        defaultValue: "Value",
    },
})
