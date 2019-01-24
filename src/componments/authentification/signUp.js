import React, { Component } from 'react'

//Authentification chap27 protection des routes
//import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//Authentification chap 28 s'inscrire
import { signUp } from '../../store/actions/authActions'

export class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName:'',
        lastName: '',
        role:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleChangeRadio = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signUp(this.state);
    }

    render() {
        const { auth, authError } = this.props;
        console.log('props inscription',this.props)
        console.log('auth',auth)
        console.log('authError',auth)
        //if (auth.uid) return <Redirect to='/' />

        return (
            <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className= "grey-text text-darken-3">S'inscrire</h5>
                
                <div className="input-field">
                    <label htmlFor="lastName">Nom</label>
                    <input type="text" id="lastName" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">Prénom</label>
                    <input type="text" id="firstName" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">e-mail</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="Password">Mot de passe</label>
                    <input type="Password" id="password" onChange={this.handleChange}/>
                </div>
                <div onClick={this.handleChangeRadio}>
                    <input type="Radio" name="role" value="Assuré" />Assuré
                    <input type="Radio" name="role" value="Syndic" />Syndic
                    <input type="Radio" name="role" value="Courtier" />Courtier
                    <input type="Radio" name="role" value="Agent" />Agent
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">S'inscrire</button>
                </div>
                <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                </div>
            </form>

            </div>
        )
    }
}

//Authentification chap 23 mapping du retour des erreurs de la connexion
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
    }
}

//Authentification chap 23 creation fonction
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
