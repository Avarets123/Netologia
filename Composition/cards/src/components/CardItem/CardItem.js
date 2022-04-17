import React from "react";

const CardItem = (props) => {

    console.log(props.children)

    return (
        <div className="margin-top">
        <div className="card" style={{width: 18 + 'rem' }}>
        {props.img ? <img src={props.img} className="card-img-top" alt="img" />: null }
            {props.children}
        </div>
        </div>
    )
    
};


export default CardItem;