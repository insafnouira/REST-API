import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'


import './App.css';
import Navs from './navmenu';
import Routes from './routes'


class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <Navs/>
          <Routes/>
      </BrowserRouter>
           
      </div>
    );
  }
}

export default App;
