import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ClassCom from './Task/task1/Classcom.jsx'
import Fun from './Task/task1/Func.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ClassCom />
    <Fun />
  </React.StrictMode>,
)
