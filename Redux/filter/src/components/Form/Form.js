import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dataAdd, dataEdit } from "../../reducers/dataSlice";
import { useSelector } from "react-redux";
import { addEditData } from "../../reducers/editDataSlice";





const Form = () => {
    const storeData = useSelector(state => state.data);
    const storeDataEdit = useSelector(state => state.editData);
    const [valueText, setValueText] = useState(storeDataEdit.text);
    const [valuePrice, setValuePrice] = useState(storeDataEdit.price);


    const dispatch = useDispatch();


    const onSubmit = (e) => {
        e.preventDefault();

        const { text, price } = e.target

        const hasId = storeData.find(el => el.id === storeDataEdit.id);

        if (hasId) {

            dispatch(dataEdit({ id: storeDataEdit.id, price: valuePrice, text: valueText }))
            dispatch(addEditData({ id: null, price: null, text: null }));
            e.target.reset();
            return;

        }


        dispatch(dataAdd({ text: text.value, price: price.value }));
        e.target.reset();

    }


    const onCancel = (e) => {
        e.preventDefault()

        dispatch(addEditData({ id: null, price: null, text: null }));
        const parent = e.target.parentNode
        parent.reset();

    }

    const hasValueT = storeDataEdit.id ? valueText : undefined
    const hasValueP = storeDataEdit.id ? valuePrice : undefined

    return (
        <>
            <form onSubmit={(e) => onSubmit(e)} className="formData">
                <input value={hasValueT}
                    onChange={(e) => setValueText(e.target.value)}
                    className="field" type='text' name='text' />
                <input className="field" type='text' name="price"
                    value={hasValueP}
                    onChange={(e) => setValuePrice(e.target.value)}
                />
                <button className="btn-save">SAVE</button>
                {storeDataEdit.id ? <button className="btn-save"
                    type="reset"
                    onClick={(e) => onCancel(e)}
                >Cancel</button> : null}

            </form>
        </>
    );

}


export default Form;