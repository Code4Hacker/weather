import React from 'react';
import { UmbrellaIcon } from '../../Images';
const ForecastDay = ({ forecast: { day, date } }) => {
    let fix = new Date(date);
    let newday = fix.toDateString().split(' ')[0];
    switch (newday.toLowerCase()) {
        case "mon":newday = "Monday";break;
        case "tue":newday = "Tuesday";break;
        case "wed":newday = "Wednesday";break;
        case "thu":newday = "Thursday";break;
        case "fri":newday = "Friday";break;
        case "sat":newday = "Saturday";break;
        case "sun":newday = "Sunday";break;
        default:newday = "No such Day, Sorry";break;
    }

    return (
        <div className="flex">
            <div className="icons">
                <img src={day.condition.icon ? day.condition.icon : UmbrellaIcon} alt="" />
            </div>
            <div className="content">
                <p>+{day.maxtemp_c}&deg;/<span className='description'>+{day.mintemp_c}</span></p>
            </div>
            <div className="content">
                <p className='center'><span className='description center'> {`${fix.toDateString().split(' ')[2]} ${fix.toDateString().split(' ')[1]}`}</span></p>
            </div>
            <div className="content">
                <p><span className='description'>{newday}</span></p>
            </div>

        </div>
    )
}

export default ForecastDay;