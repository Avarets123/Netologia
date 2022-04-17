import React from "react";
import ItemTabNews from "../ItemTabNews";
import TabsItemLink from "../TabsItemLink";
import WorkError from "../WorkError";

const ListTabNews = () => {


    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-1">
                <div className="list-tabs">
                    <ItemTabNews title={'Сейчас в СМИ '} />
                    <ItemTabNews title={' В Германии'}/>
                    <ItemTabNews title={'Рекомендуем'}/>
                    <span className="last-edit">31 июля, среда 02 32</span>
                </div>
                <div className="tabs-content">
                    <TabsItemLink link='Путин упростил получение автомобильных номеров'/>
                    <TabsItemLink link='В команде Зеленского раскрыли план реформ на Украине' />
                    <TabsItemLink link='"Турпомощь" прокоментировала гибель десятков россиян в Анталье' />
                    <TabsItemLink link='Суд закрыл дело Демпартии США против России' />
                    <TabsItemLink link='На Украине призвали создать ракеты для удара по Москве' />

                    <div className="currrency">
                        <span> <a href="##" className="currency-link" >USD MOEX 63,52</a></span>
                        <span> <a href="##" className="currency-link" >EUR MOEX 70,86</a></span>
                        <span> <a href="##" className="currency-link" >НЕФТЬ 64,90</a></span>
                    </div>
                </div>
                </div>
                <div className="col-4 ">
                    <WorkError/>
                </div>


            </div>
        </div>
    )


}


export default ListTabNews;