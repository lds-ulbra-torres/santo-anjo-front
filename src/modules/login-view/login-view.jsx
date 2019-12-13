import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CustomButton, CustomInput } from '../../components';
import { LoginBox } from './components'
import Logo from '../../assets/Logo.svg';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px'
    }
});


export const LoginView = () => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img src={Logo} alt='Logo' />
            <h4>Sistema de Água Santo Anjo da Guarda</h4>

            <LoginBox>
                <CustomInput value='Login' />
                <CustomInput value='Senha' />
                <CustomButton value='Entrar' />
            </LoginBox>
        </div>
    )
};