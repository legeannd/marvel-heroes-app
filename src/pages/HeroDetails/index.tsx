import React, { useCallback, useMemo } from 'react';
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
  Resume,
  AbilitiesSection,
  AbilityTitle,
  AbilityValue,
  TotalAbility,
  AbilityName,
  AbilityQuantity,
} from './styles';

import Characters from '../../components/Characters';
import { movies } from '../../assets/data';

const HeroDetails: React.FC = () => {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const abilityQuantity = Array(40)
    .fill(1)
    .map((item, index) => <AbilityQuantity key={index}>|</AbilityQuantity>);

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

          <Resume>
            Em Forest Hills, Queens, Nova York, o estudante de ensino médio,
            Peter Parker, é um cientista orfão que vive com seu tio Ben e tia
            May. Ele é mordido por uma aranha radioativa em uma exposição
            científica e adquire a agilidade e a força proporcional de um
            aracnídeo. Junto com a super força, Parker ganha a capacidade de
            andar nas paredes e tetos.
            {'\n'}
            {'\n'}
            Através de sua habilidade nativa para a ciência, ele desenvolve um
            aparelho que o permitir lançar teias artificiais. Inicialmente
            buscando capitalizar suas novas habilidades, Parker cria um traje e,
            como Homem Aranha, torna-se uma estrela de televisão.
          </Resume>

          <AbilitiesSection>
            <AbilityTitle>Habilidades</AbilityTitle>

            <AbilityValue>
              <AbilityName>Força</AbilityName>
              <TotalAbility>{abilityQuantity}</TotalAbility>
            </AbilityValue>

            <AbilityValue>
              <AbilityName>Inteligência</AbilityName>
              <TotalAbility>{abilityQuantity}</TotalAbility>
            </AbilityValue>

            <AbilityValue>
              <AbilityName>Agilidade</AbilityName>
              <TotalAbility>{abilityQuantity}</TotalAbility>
            </AbilityValue>

            <AbilityValue>
              <AbilityName>Resistência</AbilityName>
              <TotalAbility>{abilityQuantity}</TotalAbility>
            </AbilityValue>

            <AbilityValue>
              <AbilityName>Velocidade</AbilityName>
              <TotalAbility>{abilityQuantity}</TotalAbility>
            </AbilityValue>
          </AbilitiesSection>
          <Characters sectionName="Filmes" sectionData={movies} movieSection />
        </Container>
      </HeroBackground>
    </Wrapper>
  );
};

export default HeroDetails;
