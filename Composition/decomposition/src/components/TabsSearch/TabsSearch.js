import React from "react";
import Opportunities from "../Opportunities";

const TabsSearch = () => {

    return (
    <div className="container">

        <div className="row">
            <div className="col-1">
                <img src="https://personaspb.com/assets/images/novosti/1_19.jpg" alt="yandex" className="img-yandex"/>
            </div>
            <div className="col-10">
            <div className="content-search">
                <div className="link-search">
                    <ul>
                        <Opportunities title={'Видео'} />
                        <Opportunities title={'Картинки'} />
                        <Opportunities title={"Новости"} />
                        <Opportunities title={"Карты"} />
                        <Opportunities title={"Маркет"} />
                        <Opportunities title={"Переводчик"} />
                        <Opportunities title={"Эфир"} />
                        <Opportunities title={'Еще'} />
                    </ul>
                </div>

                <div className="field-search">
                    <input type='text' className="input-search"/>
                    <button className="btn-search" type="submit">Найти</button>
                    <div className="example-search">Найдется всё. Например, <span>фаза луны сегодня</span></div>
                </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default TabsSearch;