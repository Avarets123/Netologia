import moment from "moment";

function diffTimeSecond(date) {

    let time = moment(date);
    return moment().diff(time, 'seconds');
}


function DateTimePretty(Component) {

    return function(props) {

        const {date} = props;
        let secondLaters = diffTimeSecond(date)


        if ( secondLaters < 1 * 60 * 60) {
            let mess = '12 минут назад';
            return Component.apply(this, [mess]);

        } else if (secondLaters > 1 * 60 * 60 &&  secondLaters < 1 * 60 * 60 * 24) {
            let mess = '5 часов назад';
            return Component.apply(this, [mess]);
        } else {

            let mess = `${Math.floor(secondLaters / 60 / 60 / 24)} дней назад`;
            return Component.apply(this, [mess]);

        }

        
    }
}

export default DateTimePretty;