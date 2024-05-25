import ChildText from "./Components/ChildText"

import ChildFunc from "./Components/ChildFunc"
import ChildFile from "./Components/ChildFile"
import {useState} from 'react'

const App = () => {
  const [parTxt,setparTxt] = useState('')
  {/* //PROPS DRILLING - passing props from PARENT to CHILD */}
  // const [name,setName] = useState("Tharani")
  // const change_name = () => {
  //     setName("Jacintha")
  // }

  const modifyParTxt = (childText) =>{
    setparTxt(childText)
  }

    return (
    <div>
      {/* Problem Solving - Child Text to Parent */}
      <form>
        <label htmlFor="parent_text">Parent Text:   </label>
        <input type="text" id="par_txt" value={parTxt} onChange={(e)=>setparTxt(e.target.value)}></input><br /><br />
      </form>
      <br /><br/>
      <ChildFile modifyParTxt = {modifyParTxt}/>

      {/* //PROPS DRILLING - passing props from CHILD to PARENT */}
      {/* <ChildFunc /> */}

      {/* //PROPS DRILLING - passing props from PARENT to CHILD */}
      {/* <ChildFunc chName = {name} /> */}
    </div>
  )
}

export default App

// // //Counter with Function Component
// import {useState} from 'react'

// const App = () => {
// const [counter,setCounter] = useState(0)

// const handleIncre = () =>{
//   setCounter(counter+1)
// }
//   return (
//     <div>Counter: {counter} <br />
//     <button onClick={handleIncre}>Increment</button>
//     </div>
//   )
// }

// export default App


// // //Counter with Class Component
// import React, { Component } from 'react'
// import Counter from './Components/Counter'
// export class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {counter:0}
//   }

//   handleIncr = () => {
//     this.setState({
//       counter : this.state.counter + 1
//     })
//   }

//   handleDecre = () => {
//     this.setState({
//       counter: this.state.counter - 1
//     })
//   }

 
//   render() {
//     const name = "Tharani";

//      return (
//       <div>
//         <Counter counter = {this.state.counter} /><br />
//         <button onClick={this.handleIncr}>Increment</button>
//         <button onClick={this.handleDecre}>Decrement</button>
//       </div>
//     )
//   }
// }

// export default App





// import Home from "./Components/Home"
// const App = () => {
//   const name = "Tharani"
//   return (
//     <Home username = {name}/>
//   )
// }

// export default App