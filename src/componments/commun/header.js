//En tête
import React from 'react';
import logo from './img/logo.jpg';
import NavBar from '../layout/barreDeNavigation';
import {Link } from 'react-router-dom';

const EnTete = () => {
    return (
        <div className="container-header">
            <Link to='/' className="brand-logo"><img src={logo} className="App-logo" alt="logo" /></Link>
            
            <h1 className="App-titre">Déclaration de sinistre</h1>
            <NavBar />
        </div>
    )
}

export default EnTete
