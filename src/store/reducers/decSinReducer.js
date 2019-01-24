//Initialisation du state
const initState ={
    decSin: {id: 1, nom: 'Toto', prenom: 'titi' }
}

const decSinReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_DECSIN':
            console.log ('creation de la déclaration de sinistre', action.decSin)
            return state
        default :
            return state
    }
}

export default decSinReducer;