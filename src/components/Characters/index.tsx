import React from 'react';

import {
  Container,
  Section,
  SectionName,
  AllCharacters,
  CharacterRow,
  CharacterContainer,
  CharacterImage,
  CharacterInfo,
  CharacterCivilName,
  CharacterName,
} from './styles';

import SpiderManCover from '../../../assets/images/CoverSpiderMan.png';

const Characters: React.FC = () => {
  return (
    <Container>
      <Section>
        <SectionName>Heróis</SectionName>
        <AllCharacters>Ver tudo</AllCharacters>
      </Section>

      <CharacterRow>
        <CharacterContainer>
          <CharacterImage source={SpiderManCover}>
            <CharacterInfo>
              <CharacterCivilName>Peter Parker</CharacterCivilName>
              <CharacterName>Homem Aranha</CharacterName>
            </CharacterInfo>
          </CharacterImage>
        </CharacterContainer>
      </CharacterRow>
    </Container>
  );
};

export default Characters;
