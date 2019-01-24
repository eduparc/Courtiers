//importation des différents reducers
import authReducer from './authReducer'
import decSinReducer from './decSinReducer'
import menuReducer from './MenuReducer';

//permet de combiner tous les reducer entre eux
import { combineReducers } from 'redux'

//import des données de firestore et des données de connexion de firebase.
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

//On combine tous les reducers dnas le reducer rootReducer
const rootReducer = combineReducers({
    auth: authReducer,
    decSin: decSinReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    cheeseburgerMenu: menuReducer,
})

export default rootReducer