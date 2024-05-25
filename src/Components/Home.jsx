import { useState } from "react"
const Home = ({modifyName}) => {
     const [name, setName] = useState("Tharani")
     console.log(name)
     console.log(modifyName)


  return (
    <div>
      
        {/* //PROPS DRILLING - passing props from CHILD to PARENT */}
         Hi <b>{name}</b>!!! Welcome to our React World <br />
        <button onClick={()=>{
            setName("Jacintha") // Actual name will be Tharani, OnClick it changes to Jacintha
            modifyName("Theeran")}}>Change Name</button> 
            {/* In Child Component, actual name will be Manoj, on buttonClick it will change to Theeran */}

        {/* //PROPS DRILLING - passing props from parent to Child */}
        {/* Hi {props.name}!!! Welcome to our React World */}

    </div>
  )
}

export default Home


// const Home = ({username}) => {
//   return (
// <div>
//       <h1>Hello World</h1>
//       <p>This is a simple component</p>
//       <p>{username}</p>
//     </div>  )
// }

// export default Home