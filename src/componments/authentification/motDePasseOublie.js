import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export class MotDePasseOublie extends Component {
    state = {
        email: '',
        mdp: '',
        prenom:'',
        nom: '',
        profil: '',
    }

    changement = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    soumissionFormulaire = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { auth } = this.props;
        console.log(auth);
        if (auth.uid) return <Redirect to='/' />

        return (
            <div className="container">
                <form onSubmit={this.soumissionFormulaire}>
                    <h5 className= "grey-text text-darken-3">Réinitialiser mot de passe</h5>
                    <p>Accroche</p>
                    <div className="input-field">
                        <input type="text" id="prenom" onChange={this.changement}/>
                        <input type="text" id="lastName" onChange={this.changement}/>
                    </div>
                    <div className="input-field">
                        <input type="email" id="email" onChange={this.changement}/>
                    </div>
                    <div className="input-field">
                        <input type="Password" id="password" onChange={this.changement}/>
                    </div>
                    <div className="input-field">
                        <p>
                            Condition générale
                        </p>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">S'inscrire</button>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(MotDePasseOublie)