import React from "react";
import DateTime from "../DateTime";
import DateTimePretty from "../../HOC/DateTimePretty";

const NewTime = DateTimePretty(DateTime);

function Video(props) {

    const {url, date} = props.i
    const {id} = props



    return (
        <div className="video" key={id}>
            <iframe src={url} title={id} frameBorder='0' allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <NewTime date={date} />
        </div>
    )
}

export default Video;