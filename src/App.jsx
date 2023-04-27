import { useState } from 'react'
import './App.css'
import { Form } from "./components/Form"
import { List } from "./components/List"

function App() {
  const [itemList, setItemList] = useState([])

  const addItem = (newValue) => {
    setItemList([...itemList, { text: newValue }])
  }

  return (
    <>
      <Form addItem={addItem} />
      <List itemList={itemList} />
    </>
  )
}

export default App
