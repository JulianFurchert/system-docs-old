import * as React from "react"
import * as Ui from "../../ui"

export function Slider() {
    return <Ui.Slider value={50} />
}

Slider.defaultProps = {
    width: 200,
    height: 16,
}
