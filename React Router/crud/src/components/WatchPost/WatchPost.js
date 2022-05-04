import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'


const WatchPost = () => {


    const navigation = useNavigate();
    const { id } = useParams();
    const [dataId, setData] = useState({});



    useEffect(() => {

        (async function () {

            fetch('http://localhost:7777/posts/' + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(data => data.json())
                .then(res => setData(res))
        })();

    }, [id]);


    const onDelPost = () => {

        (async function () {

            fetch('http://localhost:7777/posts/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })();

        navigation('/');


    }







    return (
        <>

            <Link to={'/'} className='btn btn-success back'>Назад</Link>

            <div className='post-item post-item-edit' key={dataId.id}>
                <div className='author'> автор: <span className='name'>{dataId.name}</span></div>
                <div className='data-wrapper'>
                    <p className='data'> {dataId.content} </p>
                    <span style={{ marginRight: '1rem' }}
                        className="btn btn-warning">
                        <Link
                            style={{ textDecoration: 'none', color: 'white' }}
                            to={`/posts/${id}/edit`}>
                            изменить

                        </Link>
                    </span>
                    <span
                        onClick={() => onDelPost()}
                        className="btn btn-danger"
                    >
                        удалить
                    </span>
                    <span className='date'>{dataId.created}</span>
                </div>
            </div>

        </>



    )

};

export default WatchPost;

