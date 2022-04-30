import React, { useEffect, useState } from "react";


const urlItem = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

const Details = (props) => {

    const [item, setItems] = useState(null);

    const { id } = props.info;

    useEffect(() => {
        try {

            if (id) {
                (async function () {

                    await fetch(urlItem + id + '.json')
                        .then(data => data.json())
                        .then(setItems)
                })();
            }
        } catch (e) {
            console.log(e)
        }

    }, [id]);


    const UseDate = () => {


        const { name, id, avatar, details: { city, company, position } } = item

        return (
            <div key={id} className="card wrapper" style={{ width: "18rem" }}>
                <img src={avatar} className="card-img-top" alt="photoUser" />
                <div className="card-body">
                    <div className="card-header">
                        {name}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">City: {city}</li>
                        <li className="list-group-item">Company: {company}</li>
                        <li className="list-group-item">Position: {position} </li>
                    </ul>
                </div>
            </div>
        );
    }


    return item ? <UseDate /> : null
}

export default Details;