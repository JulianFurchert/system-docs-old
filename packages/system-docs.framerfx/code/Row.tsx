import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import * as Ui from "../../ui"

export function Row({ value, key, width, height }) {
    return <Ui.Row key={key} value={value} width={width} height={height} />
}

Row.defaultProps = {
    width: 150,
    height: 35,
}

addPropertyControls(Row, {
    key: {
        type: ControlType.String,
        defaultValue: "Key",
    },
    value: {
        type: ControlType.String,
        defaultValue: "Value",
    },
})
