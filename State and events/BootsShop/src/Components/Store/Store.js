import React, { useState } from 'react';

import IconSwitch from '../IconSwitch';
import CardsView from '../CardsView';

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

export default function Store() {

    const [stateIcon, setIcon] = useState('view_module')

    const onToggle = icon => {

        if (icon === 'view_list') {
            setIcon(prev => prev = 'view_module');
        } else {
            setIcon(prev => prev = 'view_list')
        }
    }


    return (
        <div className='container'>
            <IconSwitch icon={stateIcon} onSwitch={(toggle) => onToggle(toggle) } />
            
            <div className='row'>
                <CardsView products={products} icon={stateIcon}/>

            </div>
        </div>
    )


}