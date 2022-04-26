import React from "react";
import uniqid from 'uniqid';

function Video(props) {

    return (
        <div className="item item-video">
            <iframe src={props.url} title={uniqid()} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};

export default Video;