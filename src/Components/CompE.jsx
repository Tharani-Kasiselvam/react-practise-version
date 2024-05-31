import { useContext } from "react"
import { NotesContext } from "../App"

const CompE = () => {
    const {notes, addNotes} = useContext(NotesContext)

    const handleNotes = (e) => {
        e.preventDefault()
        const newNote = {
            id:notes.length+1,
            content:e.target[0].value,
            date : new Date().toISOString(),
            important: false
        }
        addNotes(newNote)
        e.target[0].value = ""
    }

  return (
    <div>
        <ul>
            {
                notes.map(note=>
                    <li key={note.id}>{note.content}</li>
                )
            }
        </ul>
        <form onSubmit={handleNotes}>
            <input type="text" />
            <button type="submit">Add Notes</button>
        </form>
    </div>

  )
}

export default CompE