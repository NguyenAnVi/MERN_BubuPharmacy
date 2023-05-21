import './Header.css';
import React from 'react';
import * as actions from '../../actions';
import Cart from './Cart';
import {config} from '../../config.js'
import { routes } from "../../routes.js";
import { signUserOut } from "../../actions/index.js";

import {Button} from '@mui/joy'
import Sheet from '@mui/joy/Sheet';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import {Link} from 'react-router-dom'

import { connect } from 'react-redux';

const{ userRoutes } = routes;
const Headers = ({authenticated}) => {

  const renderSignButton = () => {
    if (authenticated){
        return (
          <MenuItem key='1' onClose={handleClose}><Link className='authentication-menu-item' to={userRoutes.signout.path}>{userRoutes.signout.label}</Link></MenuItem>
        )
    }else{
      return (
        [
          <MenuItem key='1' onClose={handleClose}><Link className='authentication-menu-item' to={userRoutes.signin.path}><div>{userRoutes.signin.label}</div></Link></MenuItem>,
          <MenuItem key='2' onClose={handleClose}><Link className='authentication-menu-item' to={userRoutes.signup.path}><div>{userRoutes.signup.label}</div></Link></MenuItem>
        ] 
      )
    }
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Sheet className='app-header header-info' color='neutral' variant='solid'>
        <div>
          Hotline:0939963285
        </div>
        <div>
          EN-US
        </div>
      </Sheet>
      <Sheet className='app-header header-nav' color="primary" variant="solid">
        <Link to='/'>
          <img
          className='logo-image'
          src= {`${config.client.url}:${config.client.port}/logo-retangle.png`}
        />
        </Link>
        <div className='spacing'>
          <Button
            id="basic-demo-button"
            aria-controls={open ? 'authentication-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="outlined"
            color="neutral"
            onClick={handleClick}
          >
            Auth
          </Button>
          <Menu
            id='authentication-menu'
            anchorEl={anchorEl}
            open={open}
            variant="plain"
            onClose={handleClose}
            aria-labelledby="basic-demo-button"
          >
            {renderSignButton()}
            
          </Menu>
          
          
        </div>
      </Sheet>
    </>
  );
};

function mapStateToProps({auth}){
  return {
      authenticated: auth.authenticated
  }
};

export default connect(mapStateToProps, actions)(Headers);
