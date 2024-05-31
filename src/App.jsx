import { createContext } from "react"
import { useState } from "react"
import CompA from "./Components/CompA"
import CompB from "./Components/CompB"

export const NotesContext = createContext()

const App = () => {
    const [notes,setNotes] = useState([
      {
        id : 1,
        content: "HTML",
        date : "31-May-2024",
        important : false
      },
      {
        id : 2,
        content: "JavaScript",
        date : "30-May-2024",
        important : true
      }
      ])

    const addNotes = (newNote) => {
      setNotes([...notes,newNote])
      alert("Added NEW Notes successfully")
    }

  return (
    <div>
      <NotesContext.Provider  value={{notes, addNotes}}>
        {/* Wrapping compnents A & B */}
        <CompA />
        <CompB />
      </NotesContext.Provider>
    </div>
  )
}

export default App