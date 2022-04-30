import React, { useEffect, useState } from "react";
import Details from "../Details/Details";


const firstReq = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

const List = () => {

    const [state, setState] = useState([]);
    const [info, setInfo] = useState({});
    const [active, setActive] = useState();
    const [loading, setLoading] = useState();


    useEffect(() => {

        (async function () {
            await fetch(firstReq)
                .then(data => data.json())
                .then(res => setState(res))
        })();

    }, []);

    const sendDate = (id, name) => {
        setActive(id);
        setLoading(true);

        if (info.id === id) {
            return;
        }

        setInfo({
            id, name
        });
    }


    const useData = () => {
        return state.map(({ name, id }) => {
            return <li onClick={() => sendDate(id, name)} className={active === id ? "list-group-item bg-primary" : "list-group-item"
            } key={id}>{name}</li>
        })
    }


    return (
        <>
            <div className="card " style={{ width: '18rem' }}>
                <ul className="list-group list-group-flush">
                    {useData()}

                </ul>
            </div>

            <Details info={info} load={loading} />

        </>
    )
}


export default List;