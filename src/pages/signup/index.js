import React, {useState} from 'react';
import Img from '../../assets/imgCadastro.svg';
import Header from '../../components/Header';
//import $ from 'jquery';
//import {format} from 'date-fns-tz';
//import { post } from 'jquery';
import axios from 'axios';


import {
    Container,
    LeftSide,
    RightSide,
    Titleform,
    Form    
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

    const handleFormChange = (e) =>{
        e.preventDefault();
        if(form === 1){
            setForm(2);
            setButton('Voltar')                       
        }else{
            setForm(1);
            setButton('Avançar')
        }        
    }     

    const postData = () =>{             
        axios.post('http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/cliente', userData)
        .then(response =>{
           setUserData(response.data)
        }).catch(error => {
           console.log(error)
        });
    }      
  
   
    // const envio = (e) =>{
    //     e.preventDefault();
    //     alert('Cadastro realizado');        
    //     console.log(userData);
    // }   

    
    return(
       <Container>
            <Header />
           <LeftSide>
                <img src={Img} alt="" />
           </LeftSide>
           <RightSide>
               <Titleform>
                   <h2>Cadastro</h2>
               </Titleform>
               <Form onSubmit={postData}>                         
                    {form === 1 ? 
                        <>
                            <input type="text" placeholder="Nome" required 
                            onChange={event => setUserData({...userData, nome: event.target.value})}>
                            </input>  

                            <input type="text" placeholder="Usuário" required 
                            onChange={event => setUserData({...userData, usuario: event.target.value})}>
                            </input>

                            <input  type="text" placeholder="CPF" required 
                            onChange={event => setUserData({...userData, cpf: event.target.value})}>
                            </input>

                            <input  type="date" placeholder="Data Nascimento" required 
                            onChange={event => setUserData({...userData, dataNascimento: event.target.value + 'T00:00:00Z'})}>
                            </input>                          

                            <input  type="email" placeholder="Email" required 
                            onChange={event => setUserData({...userData, email: event.target.value})}>                                
                            </input> 

                            <button onClick={handleFormChange}>{button}</button>                           
                        </>  : 
                        <>
                            <input type="text" placeholder="Rua" required 
                                onChange={event => setUserData({...userData, endereco: 
                                {...userData.endereco, rua: event.target.value}})}>                                
                            </input>

                            <input  type="text" placeholder="Numero" required
                                onChange={event => setUserData({...userData, endereco: 
                                {...userData.endereco, numero: event.target.value}})}>                                
                            </input>

                            <input  type="text" placeholder="Complemento"
                                onChange={event => setUserData({...userData, endereco: 
                                {...userData.endereco, complemento: event.target.value}})}>                                
                            </input>

                            <input  type="text" placeholder="Bairro" required
                                onChange={event => setUserData({...userData, endereco: 
                                {...userData.endereco, bairro: event.target.value}})}>
                            </input>

                            <input  type="text" placeholder="Cidade" required
                                onChange={event => setUserData({...userData, endereco: 
                                {...userData.endereco, cidade: event.target.value}})}>
                            </input> 

                            <input  type="text" placeholder="Estado" required
                                onChange={event => setUserData({...userData, endereco: 
                                {...userData.endereco, estado: event.target.value}})}>
                            </input> 

                            <input  type="text" placeholder="CEP" required
                                onChange={event => setUserData({...userData, endereco: 
                                {...userData.endereco, cep: event.target.value}})}>
                            </input>
                            <div className="buttonArea">

                                <button onClick={handleFormChange}>{button}</button>     
                                <button type="submit">Enviar</button>                                
                            </div>   
                        </>
                    }                                                                         
                </Form>
           </RightSide>
       </Container>
    );
}

export default cadastro;

