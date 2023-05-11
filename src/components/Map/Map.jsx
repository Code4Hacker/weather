import React from 'react';
import hours from './option.json';
import './style.css';
// import { UmbrellaIcon } from '../Images';
const Map = ({ name }) => {
    const hour = hours[0].options;
    return (
        <div className="map">
            <div className="weather-box flex">
                <div className="">
                    <h6>
                        <span className='gradient'>Weather condition map</span>
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
                        <select name="" id="">
                            {hour?.length > 0 ? hour.map((day, i) => <option value={day.v_hour} key={i}>{day.description}</option>) : ''}
                        </select>
                    </div>
                </div>
            </div>
            <div className="current">
                <div className="weather-box">
                   {
                    name !== undefined || null ?  <iframe src={`https://maps.google.com/maps?q=${name.region}&t=&z=10&ie=UTF8&iwloc=&output=embed`} frameBorder="0" title='map_loader'></iframe>: <iframe src={`https://maps.google.com/maps?q=africa&t=&z=10&ie=UTF8&iwloc=&output=embed`} frameBorder="0" title='map'></iframe>
                   }
                </div>
            </div>
        </div>
    )
}

export default Map;