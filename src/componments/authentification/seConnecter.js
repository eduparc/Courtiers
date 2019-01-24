import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';  //Fonction qui permet de connecter le store au composant
import {signIn} from '../../store/actions/authActions'

class SeConnecter extends Component {
    state = {
        email: '',
        password: ''
    }

    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handelSubmit = (e) =>{
        e.preventDefault();
        this.props.signIn(this.state)
    }

    render() {
        const { authError } = this.props;
        return(
            <div>
            <form onSubmit={this.handelSubmit}>
                <tbody>
                    <tr>
                        <td><label htmlFor="title">e-mail</label></td>
                        <td><label htmlFor="title">Mot de passe</label></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><input type="email" id="email" onChange={this.handelChange} /></td>
                        <td><input type="Password" id="password" onChange={this.handelChange} /></td>
                        <td><button>Se connecter</button></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <NavLink className="App-link" to='/MotDePasseOublie/'>Mot de passe oublié</NavLink>
                        </td>
                    </tr>
                        <span className='red text center'>
                            { authError ? <tr><td>{authError}</td></tr> : null }
                        </span>
                        
                </tbody>
            </form>
        </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeConnecter)
