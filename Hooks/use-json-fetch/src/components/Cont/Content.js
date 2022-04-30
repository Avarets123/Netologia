import React from "react";
import useJsonFetch from "../../hooks/useJsonFetch";

function isNotNull(arg) {

    if (arg) {
        return arg;
    }

    return false;


}

const Content = ({ url }) => {

    let [data, loading, error] = useJsonFetch(url);

    const useData = isNotNull(loading) ? loading : isNotNull(data) ? data.status : isNotNull(error) ? error.status : null

    return <div className="text">
        {useData}
    </div>

}

export default Content;