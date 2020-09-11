import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import Back from '../../assets/icons/Back.svg';
import CoverSpiderMan from '../../assets/images/CoverSpiderManBig.png';

import {
  Wrapper,
  Container,
  HeroHeader,
  BackButton,
  HeroBackground,
} from './styles';

import Characters from '../../components/Characters';
import { movies } from '../../assets/data';

const HeroDetails: React.FC = () => {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Wrapper>
      <StatusBar style="light" translucent />

      <HeroBackground source={CoverSpiderMan}>
        <Container>
          <HeroHeader>
            <BackButton onPress={() => handleGoBack()}>
              <Back width={24} height={24} />
            </BackButton>
          </HeroHeader>

          <Characters sectionName="Filmes" sectionData={movies} movieSection />
        </Container>
      </HeroBackground>
    </Wrapper>
  );
};

export default HeroDetails;
