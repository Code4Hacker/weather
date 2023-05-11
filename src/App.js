import React, { useEffect, useState } from 'react';
import {  Navigator, Highlights, Forecasts, Current, Map } from './components/index';
import './index.css';
const API_GET = "http://api.weatherapi.com/v1/forecast.json?key=7be7340d2ec7456b842200425232801";
const App = () => {
    const [classChange, setClassChange] = useState('col-sm-1');
    const [class2, setClass2] = useState('col-sm-11');
    const [ add, setAdd ] = useState('');
    const [day, setDay] = useState(2);
    const searchWeather = async (title) => { 
        const response = await fetch(`${API_GET}&q=${title}&days=${day}&aqi=no&alerts=no`);
        const data = await response.json();
        setAdd(data);
    };
    const { current, location, forecast } = add;
    useEffect(() => {
        window.document.body.onresize = function () {
            if (window.matchMedia('(max-width:1206px)').matches) {
                setClassChange('col-sm-2');
                setClass2('col-sm-10');
            } else {
                setClassChange('col-sm-1');
                setClass2('col-sm-11');
            }
        }
        setDay(day);
        searchWeather('dodoma');
    }, [classChange, setClassChange, day, setDay, searchWeather]);
    return (
        <div className='app'>
            <div className='container'>
                <div className='row'>
                    <div className={classChange}>
                        <Navigator />
                    </div>
                    <div className={class2}>
                        <div className='row'>
                            <div className='col-md-4'>
                                <Current current={current} location={location} searchWeather={searchWeather}/>
                            </div>
                            <div className='col-md-8'>
                                <Highlights current={current} forecast={forecast}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <Forecasts forecast={forecast} setDay={setDay} day={day}/>
                            </div>
                            <div className='col-md-8'>
                                <Map name={location}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App