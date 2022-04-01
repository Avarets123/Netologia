import React from "react";
import PropTypes from 'prop-types';

function ShopItemFunc(props) {

    const item = props;

    return (
        
        <div className="main-content">
            <h2> {item.brand} </h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <p>{item.descriptionFull}</p>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{item.price} {item.currency}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    )
}

ShopItemFunc.propTypes = {
    item: PropTypes.instanceOf(Object).isRequired
}


export default ShopItemFunc;