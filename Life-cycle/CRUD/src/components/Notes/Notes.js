import React from "react";
import uniqid from 'uniqid';





const Notes = ({dataServer, deleletItem}) => {


    const postNote = async (e) => {
        e.preventDefault();
        const target = e.target;

        let data = {id: uniqid(), note: target.note.value}
        console.log(data);

        await fetch('http://localhost:7777/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(target.reset());


    }


    const onDelNote = (note) => {


        fetch(`http://localhost:7777/notes${note}`, {
            method: 'DELETE',
        })
        .then(data => data.json())
        .then(data => deleletItem(data))

    }


    const useData = () => {

        if (dataServer.length !== 0) {

            return dataServer.map(({note, id}) => {
                return (
                    <div className="note" key={id}>
                        <span className="del" onClick={() => onDelNote(id)}>&times;</span>
                        <div className="text"> {note} </div>
                    </div>
                );
            });

        } else {
            return null;
        }
    }


    return (
        <>
        <div className="note">
            <span className="del">&times;</span>
            <div className="text">    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Animi quas sed fugiat cumque nostrum similique dolore quis architecto molestiae recusandae
            unde ipsam eligendi dolores, illo delectus quia temporibus illum blanditiis.</div>
        </div>

        <div className="note">
            <span className="del">&times;</span>
            <div className="text">    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Animi quas sed fugiat cumque nostrum similique dolore quis architecto molestiae recusandae
            unde ipsam eligendi dolores, illo delectus quia temporibus illum blanditiis.</div>
        </div>

            {useData()}


        <div className="note new-note">
            <form method="post" onSubmit={(e) => postNote(e)}>
            <input name="note" className="input-note" placeholder="Заполните заметку"/>
            <button type="submit" className="send">	&#9658;</button>
            </form>
        </div>

        </>
    )


}


export default Notes;