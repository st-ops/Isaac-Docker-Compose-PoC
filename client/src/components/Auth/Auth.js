import React from 'react'
import { Avatar, Button, Paper, Typography, Container, Grid, TextField } from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOpenOutlined';
import useStyles from './styles';

function Auth() {
    const state = null;
    const classes = useStyles();
    const isSignup = false;

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutLinedIcon />
                </Avatar>
                <Typography variant="h5">{ isSignup ? 'Sign In' : 'Sign Up'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <TextField name="firstName" label="First Name" handleChange={handleChange} autoFocus xs={6} />
                                </>
                            )
                        }
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth