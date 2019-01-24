import React from 'react';
import avatar from './img/avatar.png';
import Menu from './img/hamburger_clair.png';
import {connect } from 'react-redux'
import { openMenu } from '../../store/actions/menuActions'

const MenuPrive =(props) => {
    console.log('menuprive props: ',props)
    const profile = props.profile;
    //
    return(
        <div className="container-header">
            <img src={avatar} className="App-logo" alt="logo" />
            <i>{profile.firstName} {profile.lastName}</i>
            <a onClick={props.openMenu} ><img src={Menu} className="App-logo" alt="logo" /></a>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        openMenu: () => dispatch(openMenu())
    }
}

export default connect(null, mapDispatchToProps)(MenuPrive);
