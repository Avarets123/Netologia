import React, { useState } from "react";


import DropdownList from '../DropdownList';

let itemList = ['Profile information', 'Change Password', 'Become PRO', 'Help', 'Log out']


export default function Dropdown() {

    const [stateList, setList] = useState('d-none');

    const onToggleList = () => {

        if (stateList === '') {
            setList(prev => prev = 'd-none');
        } else {
            setList(prev => prev = '');
        }

    }

    return (
        <div className="dropdown">
            <button 
            onClick={() => onToggleList()}
            type="button" 
            className="btn btn-primary"> 
            Account settings
            </button>
            <DropdownList list={itemList} state={stateList}/>
        </div>
    )
}