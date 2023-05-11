import React from 'react';
import days from './option.json';
import { UmbrellaIcon, lineImg } from '../Images';
import './style.css';
import ForecastDay from './forecastDays/ForecastDay';

const Forecasts = ({ forecast, day, setDay }) => {
    const aDay = days[0].options;
    return (
        <div className="forecasts">
            <div className="weather-box flex">
                <div className="">
                    <h6>
                        <span className='gradient'>{day} days Forecast</span>
                    </h6>
                </div>
                <div className="">
                    <div className="selector">
                        <div className="checked">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                style={{ width: '10px', height: "10px" }} fill="currentColor" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>
                        <select name="" id="" onChange={(e) => setDay(e.target.value)}>
                            {aDay?.length > 0 ? aDay.map((day, i) => <option value={day.d_value} key={i}>{day.description}</option>) : ''}
                        </select>
                    </div>
                </div>
            </div>
            <div className="current forecasts">
                <div className="weather-box">
                    <div className="tomorrow">
                        <div className="flex">
                            <div className="icons">
                                <img src={ forecast !== undefined && forecast.forecastday?.length>0? forecast.forecastday[1].day.condition.icon:UmbrellaIcon} alt="" />
                            </div>
                            <div className="content">
                                    <h6 className='description th'>Tomorrow</h6>
                                    <h1 className='th'>{forecast !== undefined && forecast.forecastday?.length>0? forecast.forecastday[1].day.maxtemp_c:'0'}&deg;</h1>
                                    <h6 className="description th">{forecast !== undefined && forecast.forecastday?.length>0? forecast.forecastday[1].day.condition.text:'No description'}</h6>
                                
                            </div>
                            <div className="content">
                            <div className="icon">
                                <img src={lineImg} alt="" />
                            </div>
                            </div>

                        </div>
                    </div>
                    <div className="container">
                        <div className="weather-time">
                            {
                                forecast !== undefined && forecast.forecastday?.length>0? forecast.forecastday.map((day, i) => <ForecastDay forecast={day} key={i}/>):''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecasts;