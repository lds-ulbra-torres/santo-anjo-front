import React, { Component } from 'react';
import styled from 'styled-components'
import { Button, Input } from '@material-ui/core'
import Logo from '../../assets/Logo.svg'


export class LoginView extends Component {

    render() {

        return (
            <Container>
                <Image><img src={Logo} /></Image>
                <Header>Sistema de Água Santo Anjo da Guarda</Header>
                <InputBox>
                    <Input placeholder='Login' />
                    <Input placeholder='Senha' />
                    <Button>Entrar</Button>
                </InputBox>
            </Container>
        );
    };
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.span`
    
`;


const Header = styled.h4`
    
`;

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    height: 200px;
    width: 400px;
    padding: 40px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const input = styled.div`
    /* Perguntar sobre sobrepor componentes do material-ui */
`;