import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';

import {
    RightBarContainer,
    Name,
    Info,
    ListContainer,
    InfoList,
    AddressList,
    RightBarContent,
    // FormContainer,
    Form,
    Title,
    ButtonContainer,
    DeleteButton,
    UpdateButton
} from './styles.js';
import { Redirect } from 'react-router-dom';

const User = () => {
    const [newData, setNewData] = useState({
        cpf: '',
        dataNascimento: '',
        email: '',
        endereco: {
            bairro: '',
            cep: '',
            cidade: '',
            complemento: '',
            estado: '',
            numero: '',
            rua: ''
        },
        nome: '',
        usuario: ''
    });

    const id = 27;

    useEffect(() => {
        api.get(`/cliente/${id}`).then(response => setNewData(response.data));
    }, []);

    const handleSubmit = () => {
        api.put(`/cliente/${id}`, newData).then(response => setNewData(response.data));
    }

    const handleClick = (event) => {
        api.delete(`/cliente/${id}`);
        alert('Usuário deletado');

        sendHome();
    }

    const sendHome = () => {
        this.setNewData({
            redirect: true
        })

        if (this.newData.redirect) {
            return <Redirect to='/'/>
        } else {
            return console.log('Não rolou');
        }
    }

    return (
        <>
            <Header />
            <Title>
                <h1>Usuário Encontrado</h1>
            </Title>
            {/* <FormContainer> */}
            <Form onSubmit={(handleSubmit)}>
                    <input type='text' placeholder='Nome...' onChange={event => setNewData({...newData, nome: event.target.value})}></input>

                    <input type='text' placeholder='Nome de Usuário...' onChange={event => setNewData({...newData, usuario: event.target.value})} ></input>

                    <input type='text' placeholder='CPF...' onChange={event => setNewData({...newData, cpf: event.target.value})} ></input>

                    <input type='date' placeholder='Data de Nascimento...' onChange={event => setNewData({...newData, dataNascimento: event.target.value})} ></input>

                    <input type='text' placeholder='Email...' onChange={event => setNewData({...newData, email: event.target.value})} ></input>

                    <input type='text' placeholder='CEP...' onChange={event => setNewData({...newData, endereco:{...newData.endereco, cep: event.target.value}})} ></input>

                    <input type='text' placeholder='Rua...' onChange={event => setNewData({...newData, endereco:{...newData.endereco, rua: event.target.value}})} ></input>

                    <input type='text' placeholder='Número...' onChange={event => setNewData({...newData, endereco:{...newData.endereco, numero: event.target.value}})} ></input>

                    <input type='text' placeholder='Bairro...' onChange={event => setNewData({...newData, endereco:{...newData.endereco, bairro: event.target.value}})} ></input>

                    <input type='text' placeholder='Cidade...' onChange={event => setNewData({...newData, endereco:{...newData.endereco, cidade: event.target.value}})} ></input>

                    <input type='text' placeholder='Estado...' onChange={event => setNewData({...newData, endereco:{...newData.endereco, estado: event.target.value}})} ></input>

                    <input type='text' placeholder='Complemento...' onChange={event => setNewData({...newData, endereco:{...newData.endereco, complemento: event.target.value}})} ></input>

                <ButtonContainer>
                    <DeleteButton>
                        <button onClick={(handleClick)}>Delete</button>
                    </DeleteButton>
                    <UpdateButton>
                        <button type='submit'>Update</button>
                    </UpdateButton>
                </ButtonContainer>
            </Form>
            {/* </FormContainer> */}

            <RightBarContainer>
                <RightBarContent>
                    <Name>
                        <h1>{newData.nome}</h1>
                    </Name>
                    <Info>
                        <ListContainer>
                            <InfoList>
                                <li>{newData.usuario}</li>
                                <li>{newData.cpf}</li>
                                <li>{newData.dataNascimento}</li>
                                <li>{newData.email}</li>
                            </InfoList>
                            <h4>Endereço:</h4>
                            <AddressList>
                                <li>{newData.endereco.rua}</li>
                                <li>{newData.endereco.numero}</li>
                                <li>{newData.endereco.bairro}</li>
                                <li>{newData.endereco.cidade}</li>
                                <li>{newData.endereco.estado}</li>
                                <li>{newData.endereco.complemento}</li>
                                <li>{newData.endereco.cep}</li>
                            </AddressList>
                        </ListContainer>
                    </Info>
                </RightBarContent>
            </RightBarContainer>
        </>
    );
}

export default User;
