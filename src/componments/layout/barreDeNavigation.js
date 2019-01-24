import React from 'react';
import MenuPublic from './menuPublic'
import MenuPrive from './menuPrive'
import { connect } from 'react-redux'

const NavBar =((props) => {
    const { auth, profile } = props;

    console.log('navbar props :', props)
    console.log('navbar auth :', auth)
    console.log('navbar profile :', profile)

    const links = auth.uid ? <MenuPrive profile={profile}/> : <MenuPublic />;

    return(
        <div>
            { links }
        </div>
    )
})

const mapStateToProps = (state) => {
    console.log ('app mapto state state :', state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar);
