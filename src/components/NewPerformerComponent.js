import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

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
        justifyContent: 'center',
        width: 450,
        padding: 40,
        marginTop: 50,
        minHeight: 200,
    },
    form: {
        width: 300
    },
    inputFields: {
        marginBottom: 30,
        width: 300
    },
    formControl: {
        display: 'flex',
        width: 300,
        marginBottom: 30
    },
    button: {
        marginTop: 20
    }
}

const NewPerformerComponent = props => {

    const [state, setState] = useState({
        performer: {
            name: "",
            age: "",
            category: ""
        }
    })

    const { classes } = props;

    const handleInputChange = (e) => {
        setState({
            ...state,
            performer: {
                ...state.performer,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleCategoryChange = (e) => {
        setState({
            ...state,
            performer: {
                ...state.performer,
                category: e.target.value
            }
        });
    }
    
    console.log(state);

    return(
        <div className={classes.root}>
            <Paper className={classes.paper}> 
            <form action="#"
                    className={classes.form} 
                    onSubmit={(e) => { props.onPerformerDataSubmit(e, state.performer)} }>
                    <TextField
                        required
                        className={classes.inputFields}
                        id="outlined-required"
                        name="name"
                        label="Name"
                        onChange={handleInputChange}
                    />
                    <TextField
                        required
                        className={classes.inputFields}
                        id="outlined-required"
                        name="age"
                        label="Age"
                        onChange={handleInputChange}
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="select-label">Category</InputLabel>
                        <Select
                            required
                            labelId="select-label"
                            id="demo-simple-select"
                            value={state.performer.category}
                            onChange={handleCategoryChange}
                        >
                            <MenuItem value={"Singing"}>Singing</MenuItem>
                            <MenuItem value={"Dancing"}>Dancing</MenuItem>
                            <MenuItem value={"Acting"}>Acting</MenuItem>
                        </Select>
                    </FormControl>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        disabled={state.performer.category === "" ? true : false}
                        className={classes.submitButton}>
                            Save
                    </Button>
                </form>    
            </Paper>
        </div>
    )
}

export default withStyles(styles)(NewPerformerComponent);