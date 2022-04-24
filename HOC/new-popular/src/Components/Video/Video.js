import React from "react";
import uniqid from 'uniqid';
import Popular from "../../HOC/Popular";
import New from "../../HOC/New";

function Video(props) {

    if (props.views < 100) {

        return <New>
            <div className="item item-video">
                <iframe src={props.url} title={uniqid()} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                <p className="views">Просмотров: {props.views}</p>
            </div>
        </New>
    }

    return <Popular>
        <div className="item item-video">
            <iframe src={props.url} title={uniqid()} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    </Popular>

};

export default Video;