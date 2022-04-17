import React from "react";
import CardItem from "../CardItem";

const CardsList = () => {

    const img = 'https://n1s1.hsmedia.ru/a1/ec/ec/a1ececc48afd3c0c498fdbd47ba45dbe/728x542_1_f5b22481fc08917ff7584d523f52ed21@1000x745_0xac120003_3944844451633381523.jpeg';


    return (
        <>
        <CardItem img={img} >
            <div className="card-body">
                <h5 className="card-title"> Первая карточка</h5>
                <p className="card-text">Описание к первой карточке</p>
                <a href="##" className="btn btn-primary"> Добавить</a>
            </div>
        </CardItem>
        <CardItem>
            <div className="card-body">
                <h5 className="card-title"> Вторая карточка</h5>
                <p className="card-text">Описание к второй карточке</p>
                <a href="##" className="btn btn-primary"> Добавить</a>
            </div>
        </CardItem>
        </>
    )



};


export default CardsList;