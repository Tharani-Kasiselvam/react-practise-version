import { createContext, useState } from "react"
import Profile from "./Components/Profile"
export const ProfileContext = createContext()

const App = () => {
  const [profName,setProfName] = useState("Tharani")
  
  const changeName = (newName) => {
      setProfName(newName)
  }
  return (
    <div>
      <ProfileContext.Provider value = {{changeName}}>
      <p><b>Profile Name: {profName} </b></p>
      <Profile />
      </ProfileContext.Provider>
    </div>
  )
}

export default App