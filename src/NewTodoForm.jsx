import { useState } from "react"

//onSubmit is destructured
export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)
    
        // clears out the text box after clicking 'add'
        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
        value={newItem}
        onChange={e => setNewItem(e.target.value)} 
        type="text" 
        id="item"
        />
        </div>
        <button className="btn">Add</button>
        </form>
    )
}