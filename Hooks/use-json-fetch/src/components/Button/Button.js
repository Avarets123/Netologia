import React from "react";



const Button = ({ name, type, isClick }) => {

    return (
        <button onClick={() => isClick(name)} className={"btn" + type}>
            {name}
        </button>
    )

}


export default Button;