
import React from 'react';
import {Link } from 'react-router-dom';
import Menu from 'cheeseburger-menu'
//import {slide as Menu} from 'react-burger-menu'
import { connect } from 'react-redux'
import { closeMenu } from '../../store/actions/menuActions'
import { signOut } from '../../store/actions/authActions'

const MenuLateral =(props) => {
  const menuOpen = props.menuIsOpen;
  return (
    <Menu right={true} isOpen={menuOpen} closeCallback={props.closeMenu}>
      <div className="my-menu-content">
        <div>
          <Link to="/decsin" onClick={props.closeMenu}>Déclaration un sinistre</Link>
        </div>
        <div>
          <a onClick={props.signOut} >Déconnexion</a>
        </div>
      </div>
    </Menu>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () =>   {dispatch(signOut());
      dispatch(closeMenu())
    },
    closeMenu: () => dispatch(closeMenu())
  }
}

const mapStateToProps = (state) => {
  return {
      menuIsOpen: state.cheeseburgerMenu.menuIsOpen
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuLateral)
