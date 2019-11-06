import React, { Component } from 'react';
import { Button, Input } from '@material-ui/core'
import Logo from '../../assets/Logo.svg'

export class LoginView extends Component {
    render() {
        return (
            <div className={styles.container}>
                <img src={Logo} />
                <h1>Sistema de Água Santo Anjo da Guarda</h1>
                <Input></Input>
                <Input></Input>
                <Button>Entrar</Button>
            </div>
        );
    };
};

const styles = {
    container: {

    }
}