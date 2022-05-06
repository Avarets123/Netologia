import React from "react";
import { useSelector } from "react-redux";
import { addEditData } from "../../reducers/editDataSlice";
import { useDispatch } from "react-redux";
import { dataDelete } from "../../reducers/dataSlice";

const Items = () => {

    const dispatch = useDispatch();
    const dataStore = useSelector(state => state.data)


    const onEdit = (e, id, text, price) => {

        e.preventDefault();

        dispatch(addEditData({ id, price, text }));
    }


    const onDelete = (e, id) => {

        e.preventDefault();

        dispatch(dataDelete({ id }));


    }






    const useStoreData = () => {

        return dataStore.map(({ text, price, id }) => {
            return (
                <li key={id}>
                    <span className="text">{text} </span>
                    <span className="price"> {price}</span>
                    <button className="edit"
                        onClick={(e) => onEdit(e, id, text, price)}
                    >&#9998;</button>
                    <button className="del"
                        onClick={(e) => onDelete(e, id)}
                    >&#10006;</button>
                </li>

            )
        })
    }




    return (
        <div className="wrapper-item">

            <ul>
                {useStoreData()}
            </ul>



        </div>
    )

}

export default Items;