import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import Back from '../../assets/icons/Back.svg';
import Age from '../../assets/icons/Age.svg';
import Weight from '../../assets/icons/Weight.svg';
import Height from '../../assets/icons/Height.svg';
import Universe from '../../assets/icons/Universe.svg';

import CoverSpiderMan from '../../assets/images/CoverSpiderManBig.png';

import {
  Wrapper,
  Container,
  HeroHeader,
  BackButton,
  HeroBackground,
  Info,
  Civil,
  Name,
  AdditionalInfo,
  InfoSection,
  InfoText,
  IconContainer,
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
        <HeroHeader>
          <BackButton onPress={() => handleGoBack()}>
            <Back width={24} height={24} />
          </BackButton>
        </HeroHeader>
        <Container>
          <Info>
            <Civil>Peter Parker</Civil>
            <Name>Homem Aranha</Name>
          </Info>
          <AdditionalInfo>
            <InfoSection>
              <IconContainer>
                <Age width={20} height={20} />
              </IconContainer>

              <InfoText>30 anos</InfoText>
            </InfoSection>

            <InfoSection>
              <IconContainer>
                <Weight width={20} height={20} />
              </IconContainer>

              <InfoText>78kg</InfoText>
            </InfoSection>

            <InfoSection>
              <IconContainer>
                <Height width={20} height={20} />
              </IconContainer>

              <InfoText>1.80m</InfoText>
            </InfoSection>

            <InfoSection>
              <IconContainer>
                <Universe width={20} height={20} />
              </IconContainer>

              <InfoText>Terra 616</InfoText>
            </InfoSection>
          </AdditionalInfo>

          <Characters sectionName="Filmes" sectionData={movies} movieSection />
        </Container>
      </HeroBackground>
    </Wrapper>
  );
};

export default HeroDetails;
