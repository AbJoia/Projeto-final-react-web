import React, {useState} from 'react';
import Img from '../../assets/imgCadastro.svg';
import Header from '../../components/Header';
//import {ErrorMessage} from 'formik';
//import $ from 'jquery';
//import {format} from 'date-fns-tz';
//import { post } from 'jquery';
//import api from '../../services/api';
//import * as yup from 'yup';


import {
    Container,
    ContainerSecundary,
    FormContainer,
    Titleform,
    Form,
} from './styles';

const cadastro = () => {

    const [form, setForm] = useState(1);
    const [button, setButton] = useState('Avançar');
    const [userData, setUserData] = useState({
        cpf: "",
        dataNascimento: "",
        email: "",
        endereco: {
            bairro: "",
            cep: "",
            cidade: "",
            complemento: "",
            estado: "",
            numero: "",
            rua: "",
        },
        nome: "",
        usuario: "",
    });

    const handleFormChange = (e) => {
        e.preventDefault();
        if (form === 1) {
            setForm(2);
            setButton('Voltar')
        } else {
            setForm(1);
            setButton('Avançar')
        }
    }  

    // const postData = () =>{             
    //     api.post('/cliente', userData)
    //     .then(response =>{
    //         alert('Cadastro realizado com sucesso!');
    //     }).catch(error => {
    //         alert('Cadastro não realizado!' + error);
    //     });
    // }   
   
    const envio = (e) =>{
        e.preventDefault();        
        alert('Cadastro realizado');        
        console.log(userData);
    }     
    
    
    return (
        <Container>
            <Header />
            <ContainerSecundary>
                <img src={Img} alt="Imagem" />
                <FormContainer>
                    <Titleform>
                        <h2>Cadastro</h2>
                    </Titleform>
                    <Form onSubmit={envio}>
                        {form === 1 ?
                            <>
                                <input type="text" placeholder="Nome"
                                    required
                                    onChange={event =>
                                        setUserData({ ...userData, nome: event.target.value })}>
                                </input>

                                <input type="text" placeholder="Usuário"
                                    required
                                    onChange={event =>
                                        setUserData({ ...userData, usuario: event.target.value })}>
                                </input>

                                <input type="text" placeholder="CPF"
                                    required
                                    onChange={event =>
                                        setUserData({ ...userData, cpf: event.target.value })}>
                                </input>

                                <input type="date" placeholder="Data Nascimento"
                                    required
                                    onChange={event =>
                                        setUserData({ ...userData, dataNascimento: event.target.value + 'T00:00:00Z' })}>
                                </input>

                                <input type="email" placeholder="Email"
                                    required
                                    onChange={event =>
                                        setUserData({ ...userData, email: event.target.value })}>
                                </input>

                                <button onClick={handleFormChange}>{button}</button>
                            </> :
                            <>
                                <input type="text" value={userData.endereco.rua} placeholder="Rua"
                                    required
                                    onChange={event =>
                                        setUserData({
                                            ...userData, endereco:
                                                { ...userData.endereco, rua: event.target.value }
                                        })}>
                                </input>

                                <input type="text" value={userData.endereco.numero} placeholder="Numero" required
                                    onChange={event => setUserData({
                                        ...userData, endereco:
                                            { ...userData.endereco, numero: event.target.value }
                                    })}>
                                </input>

                                <input type="text" value={userData.endereco.complemento} placeholder="Complemento"
                                    onChange={event => setUserData({
                                        ...userData, endereco:
                                            { ...userData.endereco, complemento: event.target.value }
                                    })}>
                                </input>

                                <input type="text" value={userData.endereco.bairro} placeholder="Bairro"
                                    required
                                    onChange={event => setUserData({
                                        ...userData, endereco:
                                            { ...userData.endereco, bairro: event.target.value }
                                    })}>
                                </input>

                                <input type="text" value={userData.endereco.cidade} placeholder="Cidade"
                                    required
                                    onChange={event => setUserData({
                                        ...userData, endereco:
                                            { ...userData.endereco, cidade: event.target.value }
                                    })}>
                                </input>

                                <input type="text" value={userData.endereco.estado} placeholder="Estado"
                                    required
                                    onChange={event => setUserData({
                                        ...userData, endereco:
                                            { ...userData.endereco, estado: event.target.value }
                                    })}>
                                </input>

                                <input type="text" value={userData.endereco.cep} placeholder="CEP"
                                    required
                                    onChange={event => setUserData({
                                        ...userData, endereco:
                                            { ...userData.endereco, cep: event.target.value }
                                    })}>
                                </input>

                                <div className="buttonArea">
                                    <button onClick={handleFormChange}>{button}</button>
                                    <button type="submit">Enviar</button>
                                </div>
                            </>
                        }
                    </Form>
                </FormContainer>
            </ContainerSecundary>
        </Container>
    );
}

export default cadastro;

