import React, { Component } from 'react';


export class Contact extends Component {
    state = {
        email: '',
        objet: '',
        Message:'',
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
        return (
            <div className="container">
                <form onSubmit={this.soumissionFormulaire}>
                    <h5 className= "grey-text text-darken-3">Nous contacter</h5>
                    <div className="input-field">
                        <input type="email" id="email" onChange={this.changement}/>
                    </div>
                    <div className="input-field">
                        <input type="text" id="object" onChange={this.changement}/>
                    </div>
                    <div className="input-field">
                        <input type="textarea" id="Message" onChange={this.changement}/>
                    </div>
                    <div className="input-field">
                        <input type="checkbox" id="copy" onChange={this.changement}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Envoyer</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact