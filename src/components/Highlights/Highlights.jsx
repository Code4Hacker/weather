import React from 'react'
import { spediomImg, sunImg, windImage } from '../Images';
import './style.css';
// import forecasts from '../Forecasts/forecast.json';
const Highlights = ({ current, forecast }) => {
    return (
        <div className="current highlights">
            <div className="weather-box">
                <h6><span className='gradient'>Today's Highlight</span></h6>
                <div className="row">
                    <div className="col-md-4 mrg-5">
                        <div className="row" style={{ margin: "0px" }}>
                            <div className="col-md-12 weather-box bb" style={{ width: '100%', height: '100%' }}>
                                <h6 style={{ color: "var(--p-parent)" }}>Wind Status</h6>
                                <div className="weather">
                                    <div className="weather-status">
                                        <div className="icon">
                                            <img src={windImage} alt=""/>
                                        </div>
                                    </div>
                                    <div className="status hm big">
                                        <p className='texture'><span>{current !== undefined || null ? current.wind_kph : "0"}<span>{"km/h"}</span></span></p>
                                        <p className='texture'>{current !== undefined || null ? current.last_updated.split(' ')[1] : 'HH-MM A/P'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 shadow-box bb">
                                <span className='subtitle'>Humidity</span>
                                <div className=" status">
                                    <span><h2>{current !== undefined || null ? current.humidity : '0'}</h2><span>{"%"}</span></span>
                                    <span>{current !== undefined || null ? <span>{`Precipitation in millimeter now is ${current.precip_mm}`}</span> : " No Description found!"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mrg-5">
                        <div className="row" style={{ margin: "0px" }}>
                            <div className="col-md-12 weather-box bb" style={{ width: '100%', height: '100%' }}>
                                <h6 style={{ color: "var(--p-parent)" }}>UV Index</h6>
                                <div className="weather">
                                    <div className="weather-status">
                                        <div className="icon">
                                            <img src={spediomImg} alt="" style={{filter:'hue-rotate(0deg)', borderRadius:'10px',opacity:'100%'}}/>
                                        </div>
                                    </div>
                                    <div className="statu UV">
                                        <h2>{current !== undefined || null ? current.uv : '0'}<span> UV</span></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 shadow-box">
                                <span className='subtitle'>Visibility</span>
                                <div className=" status">
                                    <span><h2>{current !== undefined || null ? current.vis_km : '0'}</h2><span>{"km/h"}</span></span>
                                    <span>{`Visibility in miles is ${current !== undefined || null ? current.vis_miles : '0'} miles`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mrg-5">
                        <div className="row" style={{ margin: "0px" }}>
                            <div className="col-md-12 weather-box bb" style={{ width: '100%', height: '100%' }}>
                                <h6 style={{ color: "var(--p-parent)" }}>Sunrise & Sunset</h6>
                                <div className="weather">
                                    <div className="weather-status">
                                        <div className="icon">
                                            <img src={sunImg} alt="" style={{filter:'hue-rotate(0deg)', borderRadius:'10px',opacity:'70%',height:'115px'}}/>
                                        </div>
                                    </div>
                                    <div className="status">
                                        <p className='texture grid'><span>sunrise</span>{forecast !== undefined || null ? forecast.forecastday[0].astro.sunrise : "HH:MM A/P"}</p>
                                        <p className='texture grid'><span>sunset</span>{forecast !== undefined || null ? forecast.forecastday[0].astro.sunset : "HH:MM A/P"}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 shadow-box">
                                <span className='subtitle'>Feels like</span>
                                <div className=" status">
                                    <span><h2>{current !== undefined || null ? current.feelslike_c : '0'}&deg;C</h2></span>
                                    <span>{`In farenheight is considered to have ${current !== undefined || null ? current.feelslike_f : '0'}F`}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Highlights;