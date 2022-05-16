import React from 'react';



export default function Listing({data}) {

    function quantityEdit(quantity) {
        if (quantity <= 10) {
            return 'item-quantity level-low'
        } else if (quantity > 10) {
            return 'item-quantity level-medium'
        } else if (quantity > 20) {
            return 'item-quantity level-high'
        }
    }



    let addData = data.map(({listing_id, url, MainImage, title, currency_code, price, quantity}) => {

        return(
            <div className='item' key={listing_id} >
                <div className='item-image'>
                    <a href={url}>
                        <img src={ MainImage ? MainImage.url_570xN : null} alt='product-img'/>
                    </a>
                </div>
                <div className='items-detals'>
                    <p className='item-title'>{title }</p>
                    <p className='item-price'>{ price } { currency_code }</p>
                    <p className={quantityEdit(quantity)}> {quantity} left</p>
                </div>
            </div>
        )
    });


    return(
        <div className='container'>
        <div className='item-list'>
                {addData}
        </div>
        </div>
    )
    


}
