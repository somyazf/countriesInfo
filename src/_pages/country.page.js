import React,{Component} from 'react';
import { withRouter } from "react-router-dom";
import Axios from 'axios';
import '../_styles/App.scss';
import world from '../world.svg';
import Bootstrap from '../_styles/bootstrap-grid.min.css'

class Country extends Component {

  constructor(props){
    super(props);
    Axios.get('https://restcountries.eu/rest/v2/alpha/' + props.match.params.code).then(response=>{
      this.setState({...response.data})
    })
  }

  goBack = ()=>{
    this.props.history.push('/');
  }
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.capital},${this.state.name}&appid=293de27ff191aaa572d89dc6abcf0caa
    `);
    const response = await api_call.json();
    console.log(response); 
  }

  render(){
    const {state} = this;
    return <>
      <div className="countryPage">
        <nav>
          <img src={world} className="nav-logo" alt="logo" />
          <span>Country Info - {this.state && this.state.name}</span>
          <button onClick={this.goBack}>Back</button>
        </nav>
        {state ? <main className="container-fluid">
            <div className="row"> 
                <div className="col-12 col-lg-4">
                  <div style={{padding:'25px',borderRadius: '10px',background: 'rgba(61, 78, 171, 0.37)'}}>
                    <div style={{display:'flex',justifyContent:'space-around'}}>
                      <h3 style={{color: 'white',fontSize: '35px',marginBottom: 0}}>{this.state && this.state.name}</h3>
                      <img src={state.flag} className="flag" alt="flag"/>
                    </div>
                    <hr/>
                    <div style={{paddingLeft: '57px'}}><h2 style={{fontSize: '40px',marginTop: '0',color: 'white'}}>{state.capital}</h2></div>
                    <div>
                      <span onClick={this.getWeather}>icon</span>
                      <span>temp</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4"  style={{background: '#ffdc37',padding: 0,textAlign: 'center'}}>
                  <div style={{background: 'black',color: 'white',textAlign: 'center',padding: '15px'}}>CALLING CODE</div>
                  <div><h1>{state.callingCodes}</h1></div>
                </div>
                <div className="col-12 col-lg-4">
                  <div style={{background: '#504e4e',color: 'white',height: '100%', padding: '15px'}}>
                    <div>{state.name}</div>
                    <div>
                      <ul className="info">
                        <li><span>Native Name:</span> {state.nativeName}</li>
                        <li><span>Capital:</span> {state.capital}</li>
                        <li><span>Region:</span> {state.region}</li>
                        <li><span>Population:</span> {state.population}</li>
                        <li><span>Languages:</span> {state.languages[0].name}</li>
                        <li><span>TimeZone:</span> {state.timezones}</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                  <div style={{background: 'black',color: 'white',textAlign: 'center',padding: '15px'}}>Capital Weather Report</div>
                  <div>
                    <span><img src="" className="flag" alt="flag"/></span>
                    <ul className="weather-info">
                      <li><span>Wind Speed:</span> {state.nativeName}</li>
                      <li><span>Temprature:</span> {state.capital}</li>
                      <li><span>Humidity:</span> {state.region}</li>
                      <li><span>Visibility:</span> {state.population}</li>
                    </ul>
                  </div>
              </div>
              <div className="col-lg-8">
              <div style={{background: 'black',color: 'white',height: '100%', padding: '15px'}}>Map</div>
              </div>
            </div>
        </main>: <span>Loading...</span>}
      </div>
    </>
  }
    
  }
  
  withRouter(Country)
  export {Country};