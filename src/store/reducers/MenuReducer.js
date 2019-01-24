const initState ={
    menuIsOpen: false
}

const menuReducer = (state = initState, action) => {
    switch (action.type) {
        case 'MENU_OPEN':
            state.menuIsOpen = true
            return state
        case 'MENU_CLOSE':
            state.menuIsOpen = false;
            return state
        default :
            return state
    }
}

export default menuReducer;