import React, { useEffect, useState } from "react";
import { addData, delData } from "../../reducers/serverDataSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Error from '../error/Error';
import Loader from "../loader/Loader";

const Services = () => {

    const [errorState, setError] = useState(null);
    const [spinner, setSpinner] = useState(true);
    const dispatch = useDispatch();
    const store = useSelector(store => store.serverData);




    useEffect(() => {
        const getData = async () => {
            await fetch('http://localhost:7070/api/services', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(setSpinner(true))
                .then(setError(false))
                .then(res => res.json())
                .then(data => dispatch(addData(data)))
                .catch(err => {
                    setError(true)
                })


        }
        getData().finally(() => setSpinner(false))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    const ServerData = () => {

        if (errorState) return <Error />
        if (!store) return null

        return store.map(({ id, name, price }) => {
            return (
                <div key={id} className="item">
                    <span className="item-service"> {name}</span>: <span className="item-price">{price}</span> рублей
                    <span className="item-edit"><Link className="link" to={'/api/services/edit/' + id}>&#9998;</Link></span>
                    <span className="item-del" onClick={() => dispatch(delData(id))}>	&#10006;</span>
                </div>
            )
        })
    }


    return (
        <>
            <div className="wrapper-item">
                {spinner ? <Loader /> : <ServerData />}

            </div>
        </>
    )
};

export default Services;