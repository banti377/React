import React from "react";
import { Provider } from "react-redux";
import CountCom from "./CountCom";
import { store } from "./app/store";

export default function Apptoolkit() {
  return (
    <>
      <Provider store={store}>
        <CountCom />
      </Provider>
    </>
  );
}
