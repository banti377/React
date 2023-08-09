import React, { useState } from 'react'
import './App.css'

import Fun from './1.component/Func';
import ListKey from './8.List/ListKey';
import Test from './6.map/Test';
import InputCom from './9.input/InputCom';
import InputTask from './9.input/InputTask';
import ClassCom from './1.component/Classcom';
import MultipleInputCom from './9.input/MultipleInputCom';
import MultipleInputTask from './9.input/MultipleInputTask';
import RegForm from './9.input/RegForm';
import StopWatch from './stopwatch/StopWatch';


function App() {
  return (
    <div>
      {/* <StopWatch /> */}
      <RegForm />
      {/* <MultipleInputTask /> */}
      {/* <MultipleInputCom /> */}
      {/* <InputTask /> */}
      {/* <InputCom /> */}
      {/* <Test /> */}
      {/* <ClassCom /> */}
      {/* <Fun /> */}
      {/* <ListKey /> */}
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

