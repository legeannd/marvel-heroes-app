import React from 'react';

import { Wrapper, Container, Subtitle, Title } from './styles';
import Header from '../../components/Header';
import HomeButtons from '../../components/HomeButtons';
import Characters from '../../components/Characters';

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

        <HomeButtons />

        <Characters />
      </Container>
    </Wrapper>
  );
};

export default Home;
