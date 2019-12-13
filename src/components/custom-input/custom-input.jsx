import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
    input: {
        width: '400px',
        marginTop: '20px',
        marginBottom: '20px'
    }
});

export const CustomInput = ({ value }) => {

    const classes = useStyles();

    return (
        <TextField
            className={classes.input}
            label={value}
            type='text'
            variant='outlined'
            InputLabelProps={{
                shrink: true
            }}
        />
    );
};
