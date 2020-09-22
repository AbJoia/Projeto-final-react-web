import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import api from 'axios';

import {
  Title,
  Text,
  Card,
  Icon,
  TopContainer,
  BottomContainer,
  ContainerTable,
  User
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
        {userResponse.map((user) =>
          <ContainerTable>
            <table>
                <tbody>
                  <tr><td>{user.usuario}</td></tr>
                  <tr><td>{user.nome}</td></tr>
                  <tr><td>{user.email}</td></tr>
                </tbody>
            </table>
          </ContainerTable>
        )}
      </BottomContainer>
    </>
  );
}

export default Dashboard;