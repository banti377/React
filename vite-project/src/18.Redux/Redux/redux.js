import { createStore } from "redux"
import { countReducer } from "./Count/countReducer"

export const store = createStore(countReducer)

