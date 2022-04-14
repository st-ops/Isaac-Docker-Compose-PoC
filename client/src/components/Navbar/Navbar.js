import React from "react";
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/memories2.png';

const Navbar = () => {
    const classes = useStyles();
    const user = null;

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height="50" width="50"></img>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.username} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary"></Button>
                    </div>
                ) : (
                    <Button variant="contained" component={Link} to="/auth"  color="primary">Sign in</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;