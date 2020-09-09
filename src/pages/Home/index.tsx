import React from 'react';

import { Wrapper, Container, CustomText } from './styles';
import Header from '../../components/Header';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <CustomText>Home</CustomText>
      </Container>
    </Wrapper>
  );
};

export default Home;
