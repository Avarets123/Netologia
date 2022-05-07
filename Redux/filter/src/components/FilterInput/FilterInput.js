import React, { useState } from "react";
import { useSelector } from "react-redux";






const FilterInput = () => {

    const [state, setState] = useState()

    const dataStore = useSelector(store => store.data);


    const onFilter = (e) => {

        const value = e.target.value;

        const data = dataStore.filter(({ text }) => text.toLowerCase().startsWith(value.toLowerCase()));

        setState(data)


        console.log(data)





    }


    const UseFilter = () => {

        return state.map(({ text, price, id }) => {
            return (
                <li key={id}>
                    <span className="text">{text} </span>
                    <span className="price"> {price}</span>

                </li>
            )
        })

    }

    const UseStoreData = () => {

        return dataStore.map(({ text, price, id }) => {
            return (
                <li key={id}>
                    <span className="text">{text} </span>
                    <span className="price"> {price}</span>
                </li>

            )
        })
    }



    return (
        <>
            <input placeholder="Поиск" type={'text'} className='input-filter'
                onChange={(e) => onFilter(e)}
            />



            <div className="wrapper-item">

                <ul>
                    {state ? <UseFilter /> : <UseStoreData />}
                </ul>



            </div>
        </>
    )


}

export default FilterInput;