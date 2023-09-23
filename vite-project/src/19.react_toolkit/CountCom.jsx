import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./fetures/count/countslice";
import Button from "react-bootstrap/esm/Button";

export default function CountCom() {
  let data = useSelector((state) => {
    return state?.COUNT;
  });

  const dispatch = useDispatch();
  return (
    <>
      <h1>count is {data?.count}</h1>
      <Button color="danger" onClick={() => dispatch(increment())}>
        Increment
      </Button>
      <Button color="danger" onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
    </>
  );
}
