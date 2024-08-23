import React from "react";
import HOC from "./HOC";

const HOCApp = (props) =>{
    return (
        <h1>Welcome User !! {props.name}</h1>
    )
}

export default HOC(HOCApp);