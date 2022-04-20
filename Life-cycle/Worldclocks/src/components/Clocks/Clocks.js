import React, {Component} from "react";
import moment from "moment";





class Clocks extends Component  {



    constructor() {
        super();
        
        
        this.state = {
            theTime: [],
        }

        
        
        
    }
    
    
    addOtherClock = (e) => {
        e.preventDefault()
        const target = e.target;
        let time = moment().utcOffset(0 + Number(target.timezona.value)).format('h:mm:ss');


        this.setState({
            theTime: [...this.state.theTime, {name: target.name.value, time}]
        })           

    }

    onDelClock = (name) => {

        this.setState({
            theTime: this.state.theTime.filter(i => i.name !== name)
        })

        console.log(this.state)
    }

    
    

    render() {


        const rendClock = () => {
            return this.state.theTime.map(({name, time}, i) => {
                return (

                    <div className="cont-clock" key={i}>
                        <span className="del-clock" onClick={() => this.onDelClock(name)}>X</span>
                        <div className="wrapper-clock">
                            <span className="hours">{time} :</span>
                            <span className="name-zona"> {name} </span>
                        </div>
                    </div>

                )
            });
        };
        


        return (
            <div className="wrapper">
                <form onSubmit={(e) => this.addOtherClock(e)}>
                    <div className="cont-input">
                    <label htmlFor="name">Название</label>
                    <input type={'text'} name='name' id="name" />      
                    </div>
                    <div className="cont-input">
                        <label htmlFor="timezona">Временная зона</label>
                        <input name="timezona" type={'text'} id='timezona'
                        placeholder="Поумолчанию GMT = 0" />
                    </div>
                    <button >Добавить</button>
                </form>

                <div className="cont-clock">
                    <span className="del-clock">X</span>
                    <div className="wrapper-clock">
                        <span className="hours">{moment().format('h:mm:ss')} :</span>
                        <span className="name-zona"> Москва</span>
                    </div>
                </div>


                        {rendClock()}
            </div>
        )
    }
}


export default Clocks;