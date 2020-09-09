import React from 'react';

import { Wrapper, Container, Subtitle, Title } from './styles';
import Header from '../../components/Header';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Subtitle>Bem vindo ao Marvel Heroes</Subtitle>
        <Title>
          Escolha o seu
          {'\n'}
          personagem
        </Title>
      </Container>
    </Wrapper>
  );
};

export default Home;
