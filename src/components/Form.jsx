import { useState } from "react"

export function Form({ addItem }) {

    const [newValue, setNewValue] = useState("");

    const submit = (e) => {
        e.preventDefault();

        addItem(newValue)
        setNewValue("");
    }

    return (
        <>
            <h1>To Do List</h1>
            <form action="" onSubmit={submit}>
                <input value={newValue} type="text" onChange={(e) => {
                    setNewValue(e.target.value)
                }} placeholder="New task" />
                <button type="submit">+</button>
            </form>

        </>
    )
}