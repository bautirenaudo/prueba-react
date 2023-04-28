import { useState, useEffect } from 'react'
import './App.css'
import { Form } from "./components/Form"
import { List } from "./components/List"

function App() {
  const [itemList, setItemList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(itemList))
  }, [itemList])

  const addItem = (newValue) => {
    setItemList([...itemList, { text: newValue, checked: false, id: crypto.randomUUID() }])
  }

  const checked = (id, checked) => {
    setItemList(currentList => {
      return currentList.map(item => {
        if (item.id == id) {
          console.log(item.checked, "a", !checked)
          item.checked = !checked
        }

        return item
      })
    })
  }

  const deleteFunction = (id) => {
    setItemList(currentList => {
      return currentList.filter(item => item.id != id)
    })
  }

  return (
    <>
      <Form addItem={addItem} />
      <List itemList={itemList} checked={checked} deleteFunction={deleteFunction} />
    </>
  )
}

export default App
