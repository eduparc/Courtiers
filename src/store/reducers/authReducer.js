const initState ={}


//...state = current state


const authReducer = (state = initState,action) => {
    switch (action.type) {
        case 'LOGGIN_SUCCESS':
            console.log ('Connexion OK')
            return {
                ...state,
                authError: null
            }
        case 'LOGGIN_ERROR':
            console.log('Connexion KO', action.err);
            return {
                ...state,
                authError:'Login failed'
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Déconnexion OK')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Inscription OK');
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_ERROR':
            console.log('Inscription OK');
            return {
                ...state,
                authError: action.err.message
            };
        default :
            return state
    }
}

export default authReducer;