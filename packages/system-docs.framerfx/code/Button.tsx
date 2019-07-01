import * as React from "react"
import * as Ui from "../../ui"

export function Button({ width, height }) {
    return (
        <Ui.Button width={width} height={height}>
            Example
        </Ui.Button>
    )
}

Button.defaultProps = {
    width: 200,
    height: 200,
}
