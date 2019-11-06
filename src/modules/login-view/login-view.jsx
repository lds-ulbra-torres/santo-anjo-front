import React, { Component } from 'react';
import styled from 'styled-components'
import { Button, Input } from '@material-ui/core'
import Logo from '../../assets/Logo.svg'

export class LoginView extends Component {
    render() {

        return (
            <Title>
                UHAUDHSU
                {/* <img src={Logo} />
                <h1>Sistema de Água Santo Anjo da Guarda</h1>
                <Input></Input>
                <Input></Input>
                <Button>Entrar</Button> */}
            </Title>
        );
    };
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
