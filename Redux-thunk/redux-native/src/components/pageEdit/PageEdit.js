import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editData } from "../../reducers/serverDataSlice";

const PageEdit = () => {

    const store = useSelector(store => store.serverData);
    const params = useParams();
    const nav = useNavigate();
    const dispatch = useDispatch();

    const item = store.find(el => el.id === +params.id);


    const [name, setName] = useState(item.name ?? '');
    const [price, setPrice] = useState(item.price ?? '');
    const [content, setContent] = useState(item.content ?? '');


    const onBack = (e) => {
        e.preventDefault();
        nav(-1);
    }


    const onSubmit = (e) => {
        e.preventDefault();

        const { name, price, content } = e.target

        const data = {
            id: +params.id,
            name: name.value,
            price: price.value,
            content: content.value
        };

        dispatch(editData(data));

        nav(-1);



    }



    return (
        <div className="wrapper-form-edit">
            <h2 className="edit-header"> Редактировать</h2>
            <form className="form-edit" onSubmit={(e) => onSubmit(e)}>
                <label>
                    Название
                    <input
                        type={'text'}
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Стоимость
                    <input
                        type={'number'}
                        name='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
                <label>
                    Описание
                    <input
                        type={'text'}
                        name='content'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </label>

                <button className="btn btn-cancel" type="button" onClick={(e) => onBack(e)}>Отмена</button>
                <button className="btn btn-save" type="submit">Сохранить</button>

            </form>
        </div>
    )
};

export default PageEdit;