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

import SpiderManCover from '../../assets/images/CoverSpiderMan.png';

interface InfoProps {
  name: string;
}

const Characters: React.FC<InfoProps> = ({ name }) => {
  const CharacterItem = () => (
    <CharacterContainer>
      <CharacterImage source={SpiderManCover}>
        <CharacterInfo>
          <CharacterCivilName>Peter Parker</CharacterCivilName>
          <CharacterName>Homem Aranha</CharacterName>
        </CharacterInfo>
      </CharacterImage>
    </CharacterContainer>
  );

  return (
    <Container>
      <Section>
        <SectionName>{name}</SectionName>
        <AllCharacters>Ver tudo</AllCharacters>
      </Section>

      <CharacterRow>
        <CharacterItem />
        <CharacterItem />
        <CharacterItem />
        <CharacterItem />
        <CharacterItem />
        <CharacterItem />
      </CharacterRow>
    </Container>
  );
};

export default Characters;
