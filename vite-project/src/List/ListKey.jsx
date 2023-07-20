import React, { useId } from 'react'

export default function ListKey() {
    let arr = ["banti", "vivek", "axit", "manish"]

    function onclick() {
        console.log("---------->");
    }
    return (
        <>
            <ul>
                {arr.map((e, i) => {
                    return (
                        <li key={i} onClick={() => onclick()}>
                            {e}
                        </li>
                    );
                })}
            </ul >
        </>
    );
}
