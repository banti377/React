import React from 'react'

import { Provider } from 'react-redux'
import CountCom from './CountCom'
import { store } from './Redux/redux'


export default function App2() {
    return (
        <>
            <Provider store={store}>
                <CountCom />
            </Provider>
        </>
    )
}
