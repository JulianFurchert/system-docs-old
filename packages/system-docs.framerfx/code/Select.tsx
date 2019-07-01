import * as React from "react"
import * as Ui from "../../ui"

export function Select() {
    return (
        <Ui.Select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </Ui.Select>
    )
}

Select.defaultProps = {
    width: 120,
    height: 45,
}
