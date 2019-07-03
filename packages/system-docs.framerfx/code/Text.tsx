import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import * as Ui from "../../ui"

const TEXTSTYLES = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle",
    "bodyText",
    "button",
    "buttonLarge",
    "code",
]

export function Text({ text, textStyle, width, height }) {
    return (
        <Ui.Text width={width} height={height} textStyle={textStyle}>
            {text}
        </Ui.Text>
    )
}

Text.defaultProps = {
    width: 200,
    height: 100,
}

addPropertyControls(Text, {
    textStyle: {
        type: ControlType.Enum,
        defaultValue: "bodyText",
        options: TEXTSTYLES,
    },
    text: {
        type: ControlType.String,
        defaultValue: "Example Text",
    },
})
