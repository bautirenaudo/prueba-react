import { useState } from "react"
import { Item } from "./Item"

export function List({ itemList }) {

    return (
        <>
            <div className="list">
                {
                    itemList.map((item, i) => {
                        return (
                            <Item key={i} text={item.text} />
                        )
                    })
                }
            </div>
        </>
    )
}