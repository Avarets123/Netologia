import React, {useState } from "react";

export default function DropdownList({list, state}) {

    const [stateActive, setActive] = useState('');

    const onToggleActive = (item) => {

        setActive(prev => prev = item)

    }

    const add = list.map(item => {
        return (
            <li key={item} className="setting-item "> 
                <a href="##" className={item === stateActive ? 'active' : ''} 
                onClick={() => onToggleActive(item)}
                > {item}</a>

            </li> 
            
        );
    })

    return (
        <ul  className={state + " setting-list"}>
            {add}
        </ul>
    );
}