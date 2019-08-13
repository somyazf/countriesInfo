import React,{Component} from 'react';
import Axios from 'axios';
import { withRouter } from "react-router-dom";

class Input extends Component{

    state = {
        name:'',
        suggest:[]
    }
    changeHandler = (event) =>{
        const {value,name} = event.target;
        this.setState({[name]: value,suggest: []});
        if(value.length > 2){
            Axios.get('https://restcountries.eu/rest/v2/name/' + value).then(response=>{
                this.setState({suggest: response.data})
            })
        }
    }

    goToCountry = countryCode =>()=>{
        this.props.history.push('/country/' + countryCode);
    }

    render(){
        return (
            <div className="search-area">
                <input type="text" name="name" className="input" autoComplete="off" value={this.state.name} onChange={this.changeHandler} />
                <button>GO</button>
                {(this.state.suggest.length > 0) && <ul className="suggest">
                {this.state.suggest.map(country=><li key={country.alpha2Code} onClick={this.goToCountry(country.alpha2Code)}>{country.name}<img src={country.flag} alt="flag" className="flags"/></li>
                )}
                </ul>
                }
            </div>
          );
    }
}

const inputWithRouter = withRouter(Input)
export {inputWithRouter as Input};