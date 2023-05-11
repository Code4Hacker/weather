import React, { useState } from 'react';
import './style.css';
import { UmbrellaIcon } from '../Images';

const Current = ({ current, searchWeather, location }) => {
    const [weather, setWeather] = useState('');
    const pressed = (e) => {
        if(e.key === 'Enter'){
            document.getElementById('searching').click();
        }
    }
    return (
        <div className="current">
            <div className="weather-box">
                <div className="search-tool">
                    <input type="text" value={weather} onChange={(e) => setWeather(e.target.value)} onKeyDown={pressed}/>
                    <div className="icon">
                        <button onClick={() => searchWeather(weather)} id="searching" disabled={weather.length<2?true:false}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="searchIcon" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="weather">
                    <div className="weatherIcon">
                        <div className="icon">
                            <img src={current !== undefined || null ? current.condition.icon : UmbrellaIcon} alt="" />
                        </div>
                        <div className="large">
                            <h1><span>{current !== undefined || null ? current.temp_c : '0'}&deg;C</span></h1>
                            <div className="description">
                                <span className='icons'><img src={current !== undefined || null ? current.condition.icon : UmbrellaIcon} alt="" /></span>{current !== undefined || null ? current.condition.text : 'No Location Fetched yet'}
                            </div>
                        </div>
                    </div>
                    <div className="country-date">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <span className='description'>{location !== undefined || null ? <span>{`${location.region},${location.country}`}</span> : 'No Data found!'}</span>
                        </div>
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                                <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                            </svg>
                            <span className='description'>{location !== undefined || null ? new Date(location.localtime).toDateString() : 'YYYY-MM-DD HH-MM'}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Current;