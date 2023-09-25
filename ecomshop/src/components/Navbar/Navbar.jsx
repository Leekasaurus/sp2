import React from 'react';
import {AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {Link, useLocation} from 'reat-router-dom';

import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ( {totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

   
    
  return (
    <>
       <AppBar position="fixed" className={classes.appBar} color= "inherit">
       <ToolBar>
            <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={} alt="Commerce.js" height="25px" className={classes.image} />
            Commerce.js
            </Typography>
            <div className={classes.grow} />
            {location.pathname === '/' && (
            <div className={classes.button}>
            <Link to="/cart"> go to cart</Link>
                <IconButton  component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
                </IconButton>
            </div> )}
       </ToolBar>
       </AppBar>
    </>
            )
}

export default Navbar