import React from 'react';
import { withRouter } from "react-router-dom";
import {Input} from '../_components/input'
import world from '../world.svg';

function Main() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={world} className="App-logo" alt="logo" />
        </header>
        <Input/>
      </div>
    );
  }
  
  withRouter(Main)
  export {Main};