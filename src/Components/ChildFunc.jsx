import Home from "./Home"
import { useState } from "react"

const ChildFunc = () => {
    const [name,setName] = useState('Manoj')

    const diffName = (value) => {
        setName(value)
    }

  return (
    <div>
         {/* //PROPS DRILLING - passing props from CHILD to PARENT */}
         Child Comp: <b>{name} </b>
        <Home modifyName = {diffName} />

         {/* //PROPS DRILLING - passing props from PARENT to CHILD */}
        {/* <Home name = {props.chName} /> */}

       
    </div>
  )
}

export default ChildFunc