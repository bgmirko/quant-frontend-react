import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, TextField, Typography, Button, FormControl, InputLabel } from '@material-ui/core';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 450,
        padding: 40,
        marginTop: 50
    },
    inputFields: {
        width: 300,
        marginBottom: 30
    },
    submitButton: {
        width: 300,
        marginTop: 20,
        marginBottom: 30
    }
}

const LoginComponent = props => {

    const { classes } = props;

    return(
        <div className={classes.root}>
            <Typography variant="h6">Login Page</Typography>
            <Paper className={classes.paper}> 
                <TextField
                    required
                    className={classes.inputFields}
                    id="outlined-required"
                    label="Email"
                />
                <TextField
                    required
                    className={classes.inputFields}
                    id="outlined-required"
                    label="Password"
                />
                <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>Login</Button>
            </Paper>
        </div>
    )
}

export default withStyles(styles)(LoginComponent);