import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware ,compose } from 'redux';                    //fonction permettant de créer un store Redux
import rootReducer from './store/reducers/rootReducer'  //import du Reducer global
import { Provider } from 'react-redux'                  //Chargement du provider qui permettra de passer le Store aux differents composants
import thunk from 'redux-thunk'                         // chargement librairie action asynchrone.

import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'

import fbConfig from './config/fbConfig'

const store = createStore(rootReducer , 
    compose (
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),               // permet de se connecter à la base de donnée
        reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true}),           // permet de se connecter à la base de donnée
    )
);

store.firebaseAuthIsReady.then(() =>{
    // L'objet provider permet de passer en entrée le store. et devient variable globale de tous lres composants
    ReactDOM.render(<Provider store ={ store }><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
})

