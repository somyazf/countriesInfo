import React, { Component } from "react";
import Axios from 'axios';

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
        };
        async componentDidMount() {
            const URL = (`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&APPID=293de27ff191aaa572d89dc6abcf0caa`)
            let response = await Axios.get(URL);
            let data  = response.data;
            this.setState({ data });
        }
    render() {
        const {data} = this.state;
        return (
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <span>{data && data.weather.length > 0 && <img id="wicon" src={"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"} alt="Weather icon"></img>}</span>
            <span style={{color: 'floralwhite',fontSize: '20px'}}>{data && data.weather.length > 0 &&<p>{data.weather[0].main}</p>}</span>
            <span style={{color: 'floralwhite',fontSize: '20px'}}> {data && data.main.temp && <p>{Math.floor(data.main.temp  - 273.15)}°C</p>}</span>
            <span style={{color: 'floralwhite',fontSize: '20px'}}> {data && data.main.humidity && <p>{data.main.humidity}%</p>}</span>
          </div>
        )
    }
}

export {Weather}