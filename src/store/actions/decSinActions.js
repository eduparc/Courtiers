import SeConnecter from "../../componments/authentification/seConnecter";

//Actions sur les déclarations de sinistres

export const createDecSin = (decSin) => {
    return (dispatch, getState) => {
        //Appel Asynchrone à la base de données 
        //On met le code ici ...
       
        //On aura deux variables dans l'objet qui est envoyé : le type et decSin
        dispatch({ type: 'CREATE_DECSIN', decSin})
    }
};
