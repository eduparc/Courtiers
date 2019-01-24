import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux'

import SignUp from './componments/authentification/signUp';
import PiedDePage from './componments/commun/footer';
import EnTete from './componments/commun/header';
import Contact from './componments/public/contact';
import MentionLegale from './componments/public/mentionLegale'
import MotDePasseOublie from './componments/authentification/motDePasseOublie'
import MenuLateral from './componments/layout/MenuLateral';


class App extends Component {
  render() {
    console.log('app props : ', this.props)
    return (
      <BrowserRouter>
        <div className="App">
          <MenuLateral />
          <EnTete />
          <div className="App-principal" >
            <div className="App-contenu">
              <Switch>
                  <Route exact path='/' component={SignUp}/>
                  <Route path='/contact/' component={Contact} />
                  <Route path='/MentionsLegales/' component={MentionLegale} />
                  <Route path='/MotDePasseOublie/' component={MotDePasseOublie} />
                </Switch>
            </div>
          </div>
          <PiedDePage />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      menuBurger: state.menuBurger
  }
}

export default connect(mapStateToProps)(App);
