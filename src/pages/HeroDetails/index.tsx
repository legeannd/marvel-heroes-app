import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import Back from '../../assets/icons/Back.svg';
import CoverSpiderMan from '../../assets/images/CoverSpiderMan.png';

import {
  Wrapper,
  Container,
  HeroHeader,
  BackButton,
  HeroBackground,
} from './styles';

const HeroDetails: React.FC = () => {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Wrapper>
      <StatusBar style="light" />

      <Container>
        <HeroBackground source={CoverSpiderMan}>
          <HeroHeader>
            <BackButton onPress={() => handleGoBack()}>
              <Back width={24} height={24} />
            </BackButton>
          </HeroHeader>
        </HeroBackground>
      </Container>
    </Wrapper>
  );
};

export default HeroDetails;
