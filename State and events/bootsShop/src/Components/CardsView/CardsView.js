import React from "react";

export default function CardsView({products, icon}) {

    let add;

    if (icon === 'view_module') {
        add = products.map(({img, name, color, price}) => {

            return (
                <div className="col-4">
                    <div className="card">
                        <img className="card-img" src={img} alt="bootsPhoto"/>
                        <h4 className="card-header"> {name}</h4>
                        <span className="card-color">{color}</span>
                        <span className="card-price">${price}</span>
                        <button type="button" className="btn btn-outline-danger card-button"> ADD TO CART</button>
                    </div>
                </div>
            )
        })

    } else {
        add = products.map(({img, name, color, price}) => {

            return (
                    <div className="card-list">
                        <img className="card-img-list" src={img} alt="bootsPhoto"/>
                        <h4 className="card-header-list"> {name}</h4>
                        <span className="card-color-list">{color}</span>
                        <span className="card-price-list">${price}</span>
                        <button type="button" className="btn btn-outline-danger card-button-list"> ADD TO CART</button>
                    </div>
            )
        })
    }



    return add

}