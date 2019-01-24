//Pied de page
import React from 'react';
import { NavLink } from 'react-router-dom'

const PiedDePage = () => {
    return (
        <div className="container-footer">
            <div className="link">
                <NavLink className="App-link" to='/contact'>Contact</NavLink>
            </div>
            <div className="link">
                <NavLink className="App-link" to='/MentionsLegales'>Mentions Legales</NavLink>
            </div>
            <div className="Credit">
                <i>Copyright @ Decsia 2019</i>
            </div>
        </div>
    )
}

export default PiedDePage
