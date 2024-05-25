import { useState } from "react"
import App from "../App"

const ChildText = () => {
//     const [chTxt,setchTxt] = useState('')

//     const copyToParent = (e) =>{

//     }

// const updateText = (e) =>{
//     setchTxt(e.target.value)
//     console.log(e.target.value)
// }

  return (
    <div>
        <form>
            <label htmlFor="child_text">Child Text:   </label>
            <input type="text" name="ch_txt" ></input>
            {/* value={chTxt} onChange={updateText} */}
            <br /><br />
            <button>Send Child Text to Parent</button>
        </form>
        {/* <App /> */}
    </div>
  )
}

export default ChildText