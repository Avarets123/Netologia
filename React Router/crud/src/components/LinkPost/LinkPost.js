import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const LinkPost = () => {

    const [post, setPost] = useState([]);




    useEffect(() => {

        (async function () {

            fetch('http://localhost:7777/posts/',)
                .then(data => data.json())
                .then(setPost);
        })();


    }, []);

    return post.map(({ name, content, created, id }) => {
        return (

            <div className='post-item' key={id}>
                <div className='author'> автор: <span className='name'>{name}</span>
                    <Link key={id} to={'/posts/' + id} className="link-edit" >
                        посмотреть
                    </Link>
                </div>
                <div className='data-wrapper'>
                    <p className='data'> {content} </p>
                    <span className='date'>{created}</span>
                </div>
            </div>

        )
    })

}
export default LinkPost;