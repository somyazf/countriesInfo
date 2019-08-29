import React,{Component} from 'react';
import { withRouter, NavLink, Link  } from 'react-router-dom';
import {Map}from '../_components/map';
import {Weather}from '../_components/weather';
import Axios from 'axios';
import '../_styles/App.scss';
import world from '../world.svg';
import Bootstrap from '../_styles/bootstrap-grid.min.css';

class Country extends Component {
  constructor(props){
    super(props);
  }
  getCountry = () => {
    Axios.get('https://restcountries.eu/rest/v2/alpha/' + this.props.match.params.code).then(response => {
      this.setState({ ...response.data })
    })
  }
  componentDidMount() {
    this.getCountry();
  }
  componentDidUpdate() {
    this.getCountry();
  }
  goBack = ()=>{
    this.props.history.push('/');
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
        {this.state ? <main className="container-fluid">
            <div className="row"> 
                <div className="col-12 col-lg-4">
                  <div style={{padding:'25px',borderRadius: '10px',background: 'rgba(61, 78, 171, 0.37)',minHeight: '100%'}}>
                    <div style={{display:'flex',justifyContent:'space-around'}}>
                      <h3 style={{color: 'white',fontSize: '25px',marginBottom: 0}}>{this.state && state.name}</h3>
                      <img src={state.flag} className="flag" alt="flag"/>
                    </div>
                    <hr/>
                    <div style={{paddingLeft: '57px'}}><h2 style={{fontSize: '40px',marginTop: '0',color: 'white'}}>{state.capital}</h2></div>
                    <div>
                      <Weather city={state.capital}/>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                <div style={{padding:'25px',borderRadius: '10px',background: 'rgba(61, 78, 171, 0.37)'}}>
                    <div style={{color:'#1a07c5',textAlign: 'center',fontSize: '23px'}}>Facts & Figures</div>
                    <div>
                      <ul className="info">
                        <li><span>Native Name:</span> {state.nativeName}</li>
                        <li><span>Capital:</span> {state.capital}</li>
                        <li><span>Region:</span> {state.region}</li>
                        <li><span>Population:</span> {state.population}</li>
                        <li><span>Languages:</span>{state.languages[0].name}</li>
                        <li><span>TimeZone:</span> {state.timezones[0]}</li>
                        <li><span>Calling Code:</span> {state.callingCodes}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div style={{borderRadius: '10px',background: 'rgba(61, 78, 171, 0.37)',height: '100%'}}>
                  <Map lat={state.latlng[0]} long={state.latlng[1]}/>
                  </div>
                </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {state.borders.length > 0 ? <div  style={{borderRadius: '10px',background: 'rgba(61, 78, 171, 0.37)',height: '100%'}}>
                    <div style={{color:'#1a07c5',textAlign: 'center',fontSize: '23px',padding: '12px 0'}}>Land borders</div>
                    <div>
                      <ul className="borders">
                      {state.borders.map(border=><Link to={`/country/${border}`}
                       key={border}><p>{border}</p></Link>
                      )}
                      </ul>
                    </div>
                  </div>:null}
              </div>
            </div>
        </main>: <span style={{color:'#1a07c5',textAlign: 'center',fontSize: '25px'}}>Loading...</span>}
      </div>
    </>
  }
    
  }
  
  withRouter(Country)
  export {Country};