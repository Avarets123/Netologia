import { useState, useEffect } from "react";


const useJsonFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {

        (async function () {
            setLoading('loading')

            let res = await fetch(url);

            if (!res.status > 299) {
                setError(true)
            }

            res.json().then(setData)
                .finally(setLoading(false));

        })();


    }, [url])


    return [data, loading, error]
}


export default useJsonFetch;
