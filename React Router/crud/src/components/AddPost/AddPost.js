import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddPost = () => {

    const goToHome = useNavigate();


    const postData = (e) => {
        e.preventDefault();

        const target = e.target;

        (async function () {

            const post = {
                name: target.name.value,
                content: target.content.value
            }

            await fetch('http://localhost:7777/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            });


        })();

        goToHome('/')

    }


    return (
        <div className="add-post">
            <h3> Добавление поста </h3>
            <form method='POST' id='add-post' onSubmit={(e) => postData(e)}>
                <input placeholder='Введите ваше имя' type={'text'} name='name' />
                <input placeholder='Введите что-нибудь' type={'text'} name='content' />
                <div className='wrapper-btn-add'>
                    <Link className='btn btn-danger' to={'/'}> Отмена</Link>
                    <button type='submit' className='btn btn-success btn-add'> Добавить </button>
                </div>
            </form>
        </div>
    )
};

export default AddPost;