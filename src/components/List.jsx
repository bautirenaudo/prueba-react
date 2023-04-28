import { useState } from "react"
import { Item } from "./Item"

export function List({ itemList, checked ,deleteFunction}) {

    return (
        <>
            <div className="list">
                {
                    itemList.map((item) => {
                        return (
                            <Item key={item.id} text={item.text} id={item.id} checked={item.checked} checkedFunction={checked} deleteFunction={deleteFunction} />
                        )
                    })
                }
            </div>
        </>
    )
}