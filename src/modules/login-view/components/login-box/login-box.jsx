import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '500px',
        height: '300px',
        boxShadow: '0px 0px 8px 1px lightgray'
    }
});

export const LoginBox = ({ children }) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};