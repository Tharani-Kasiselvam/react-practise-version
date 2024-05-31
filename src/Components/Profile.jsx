import { useContext } from "react"
import { ProfileContext } from "../App"

const Profile = () => {
    const {changeName} = useContext(ProfileContext)
    const modifyProfile = (e) => {
        e.preventDefault()
        changeName(e.target[0].value)
        e.target[0].value = ""
    }
  return (
    <div>
        <form onSubmit={modifyProfile}>
            <input type="text" />
            <button type="submit">Change Profile Name</button>
        </form>
    </div>
  )
}

export default Profile