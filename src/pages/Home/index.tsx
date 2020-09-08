import React from 'react';
import { Text } from 'react-native';

import { Wrapper, Container, CustomText } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <CustomText>Home</CustomText>
      </Container>
    </Wrapper>
  );
};

export default Home;
