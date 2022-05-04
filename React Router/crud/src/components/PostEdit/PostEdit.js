import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';


const PostEdit = () => {


    const { id } = useParams();
    const [data, setData] = useState({});
    const goTo = useNavigate();


    useEffect(() => {

        (async function () {
            fetch(`http://localhost:7777/posts/${id}/edit`)
                .then(data => data.json())
                .then(setData)
        })();


    }, [id])



    const onSaveData = (e) => {
        e.preventDefault();

        const target = e.target;

        const content = target.content.value;


        (async function () {


            await fetch(`http://localhost:7777/posts/${id.toString()}/edit`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content })
            })


        })();

        goTo(-1);


    }






    return (

        <div className='post-item post-item-edit' key={data.id}>
            <div className='author'> автор: <span className='name'>{data.name}</span></div>
            <div className='data-wrapper'>
                <p className='data'> <strong>контент:</strong> {data.content} </p>

                <form onSubmit={(e) => onSaveData(e)}>

                    <input
                        className='data input-edit'
                        type={'text'}
                        name='content'
                    />
                    <span style={{ marginRight: '1rem' }}
                        className="btn btn-warning">
                        <Link className="cancel"
                            style={{ textDecoration: 'none', color: 'white' }}
                            to={`/posts/${id}`}
                        >
                            отмена

                        </Link>
                    </span>
                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        сохранить
                    </button>
                </form>
                <span className='date'>{data.created}</span>
            </div>
        </div>
    )
}


export default PostEdit;