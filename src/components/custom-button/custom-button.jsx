import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    background: '#4d80e4',
    color: 'white',
    width: '400px',


    '&:hover': {
      background: '#46b3e6'
    }
  }
});

export const CustomButton = ({ value }) => {

  const classes = useStyles();

  return (
    <Button className={classes.button}>{value}</Button>
  );
};
