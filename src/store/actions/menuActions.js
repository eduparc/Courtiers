export const openMenu = () => {
    return (dispatch) => {
        const menuIsOpen = true;
        dispatch({ type: 'MENU_OPEN' , menuIsOpen});
    }
}

export const closeMenu = () => {
    return (dispatch) => {
        const menuIsOpen = false;
        dispatch({ type: 'MENU_CLOSE' , menuIsOpen});
    }
}

