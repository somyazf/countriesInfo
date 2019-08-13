import React from 'react';
import './_styles/App.scss';
import { Main,Country } from "./_pages";
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main}></Route>
      <Route path="/country/:code" component={Country}></Route>
    </Router>
  );
}

export default App;
