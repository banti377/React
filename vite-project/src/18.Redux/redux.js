import { createStore } from "redux"
import { countReducer } from "./Count/countReducer"

const store = createStore(countReducer)

