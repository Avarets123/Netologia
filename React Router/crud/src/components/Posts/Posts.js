import React from "react";
import { Link } from "react-router-dom";
import LinkPost from "../LinkPost/LinkPost";




const Posts = () => {

    return (
        <>
            <div className="header">
                <h2 className="header-posts"> Посты
                    <Link
                        className="link-add-post btn btn-success"
                        to={'/posts/new'}
                    >
                        Создать</Link>
                </h2>

            </div>

            <div className="wrapper-posts">
                <LinkPost />

            </div>
        </>
    )

};

export default Posts;


