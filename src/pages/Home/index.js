import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from 'axios';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';


import {
  Title,
  Card,
  Icon,
  TopContainer,
  BottomContainer,
} from './styles';
import AccountIcon from '../../assets/account.svg';

const baseURL = 'http://residencia-ecommerce.us-east-1.elasticbeanstalk.com';

const Dashboard = () => {

  const [userResponse, setUserResponse] = useState([]);

  useEffect(() => {
    api.get(`${baseURL}/cliente`).then(response => setUserResponse(response.data));
  }, []);

  return (
    <>
      <Header />
      <Title>Informações</Title>
      <TopContainer>
        <Card style={{ backgroundColor: "#FAD3D3" }}>
          <p className="text-title">Total de Clientes</p>
          <Icon src={AccountIcon} />
        </Card>
        <Card style={{ backgroundColor: "#D3FADC" }}>
          <p className="text-title">Clientes Ativos</p>
          <Icon src={AccountIcon} />
        </Card>
        <Card style={{ backgroundColor: "#D3F3FA" }}>
          <p className="text-title">Clientes Inativos</p>
          <Icon src={AccountIcon} />
        </Card>
        <Card style={{ backgroundColor: "#E4D3FA" }}>
          <p className="text-title">Contas excluídas</p>
          <Icon src={AccountIcon} />
        </Card>
      </TopContainer>
      <BottomContainer>
        <Title>Clientes</Title>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          {userResponse.map((user) =>
            <tbody>
              <Link to={`/user/${user.id}`}>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.nome}</td>
                  <td>{user.email}</td>
                  <td>{user.usuario}</td>
                </tr>
              </Link>
            </tbody>
          )}
        </table>
      </BottomContainer>
    </>
  );
}

export default Dashboard;