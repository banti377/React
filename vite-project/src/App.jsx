import React, { useState } from 'react'
import './App.css'
import ClassCom from './component/Classcom';
import Fun from './component/Func';
import ListKey from './List/ListKey';
import Test from './map/Test';
import InputCom from './input/InputCom';


function App() {
  return (
    <div>
      <InputCom />
      {/* <Test /> */}
      {/* <ClassCom />
      <Fun />
      <ListKey /> */}
    </div>
  )

}

export default App;



// export default function FunState() {
//   let [count, setCount] = useState(0);
//   let x = 0;


//   function updateCount(params) {
//     x++
//     console.log(x);
//   }
//   function updateState(params) {
//     setCount((pre) => pre + 1)
//     console.log(count);
//   }

//   return (
//     < div >
//       <h1>{x}</h1>
//       <button onClick={() => updateCount()}>Count Inc</button>
//       <hr />
//       <h1>{count}</h1>
//       <button onClick={() => updateState()}>Count Inc</button>
//     </div >
//   )
// }

