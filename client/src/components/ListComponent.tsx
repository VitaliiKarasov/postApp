import { observer } from "mobx-react-lite"
import React, { FC } from "react"

const ListComponent: FC = () => {
    return(
        <div>
            <input type="text" />
            <div>
                <button>Add Post</button>
            </div>
        </div>
    )
}

export default observer(ListComponent)
