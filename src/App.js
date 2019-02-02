import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Containers
import Clients from './containers/Clients';
import ClientForm from './containers/ClientForm';
import Objects from './containers/Objects';
import ObjectForm from './containers/ObjectForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Link to="/" className="home">НА ГЛАВНУЮ</Link>
          
          <Route path="/" exact render={props => (
          <div className="groundControl">
            <div style={{display: 'block'}}>
              <h2 style={{margin: '34px'}}> Список клиентов </h2>
              <Link to="/client-form" style={{
                marginLeft: '34px',
                padding: '13px',
                background: '#e5e5e5',
                borderRadius: '5px',
                color: '#080808',
                textDecoration: 'none'
              }}>Новый клиент</Link>
              <Clients />
              
            </div>
            <div style={{display: 'block'}}>
              <h2 style={{margin: '34px'}}> Список объектов </h2>
              <Link to="/object-form" style={{
                marginLeft: '34px',
                padding: '13px',
                background: '#e5e5e5',
                borderRadius: '5px',
                color: '#080808',
                textDecoration: 'none'
              }}>Добавить новый объект</Link>
              <Objects />
            </div>
          </div>)}
          />

          <Route path="/client-form" component={ClientForm} />
          <Route path="/object-form" component={ObjectForm} />

        </div>

      </Router>
    );
  }
}

export default App;