import {useState} from 'react'

const ChildFile = ({modifyParTxt}) => {
    const [chTxt,setchTxt] = useState('')

    const updateText = (e) =>{
    setchTxt(e.target.value)
    // console.log(e.target.value)
}

const copyToParent = (e) => {
    e.preventDefault()
    // console.log(chTxt)
    modifyParTxt(chTxt)
}

  return (
    <div>
         <form>
            <label htmlFor="child_text">Child Text:   </label>
            <input type="text" name="ch_txt" value={chTxt} onChange={updateText}></input>
            <br /><br />
            <button onClick={copyToParent}>Send Child Text to Parent</button>
        </form>
    </div>
  )
}

export default ChildFile