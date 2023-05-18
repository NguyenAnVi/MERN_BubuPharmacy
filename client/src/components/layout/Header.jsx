import './Header.css';
import React from 'react';
import {Button} from '@mui/joy'
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import {Link} from 'react-router-dom'
import {config} from '../../config.js'
import { routes } from "../../routes.js";
import Cart from './Cart';

const{ userRoutes } = routes;
const Headers = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='app-header'>
      <Link to='/'><img
        className='logo-image'
        src= {`${config.client.url}:${config.client.port}/logo-retangle.png`}
      /></Link>
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
          <MenuItem onClose={handleClose}><Link className='authentication-menu-item' to={userRoutes.signin.path}><div>{userRoutes.signin.label}</div></Link></MenuItem>
          <MenuItem onClose={handleClose}><Link className='authentication-menu-item' to={userRoutes.signup.path}><div>{userRoutes.signup.label}</div></Link></MenuItem>
        </Menu>
        
        
      </div>
    </div>
  );
};
export default Headers;
