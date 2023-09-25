import React from 'react';
import {AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';

import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ( {totalItems}) => {
    const classes = useStyles();
    
  return (
    <>
       <AppBar position="fixed" className={classes.appBar} color= "inherit">
       <ToolBar>
            <Typography variant="h6" className={classes.title} color="inherit">
            <img src={} alt="Commerce.js" height="25px" className={classes.image} />
            Commerce.js
            </Typography>
            <div className={classes.grow} />
            <div className={classes.button}>
                <IconButton aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
                </Badge>
                </IconButton>
            </div>
       </ToolBar>
       </AppBar>
    </>
  )
}

export default Navbar