import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
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

export interface SectionData {
  name?: string;
  civil?: string;
  image: string;
}

interface InfoProps {
  sectionName: string;
  sectionData: Array<SectionData>;
  movieSection?: boolean;
}

const Characters: React.FC<InfoProps> = ({
  sectionName,
  sectionData,
  movieSection,
}: InfoProps) => {
  const { navigate } = useNavigation();

  const handleGoToDetails = useCallback(() => {
    navigate('HeroDetails');
  }, [navigate]);

  const CharacterItem: React.FC = () => {
    const items = sectionData.map(char => (
      <CharacterContainer key={char.image} onPress={() => handleGoToDetails()}>
        <CharacterImage source={char.image}>
          <CharacterInfo>
            <CharacterCivilName>{char.civil}</CharacterCivilName>
            <CharacterName>{char.name}</CharacterName>
          </CharacterInfo>
        </CharacterImage>
      </CharacterContainer>
    ));

    return <>{items}</>;
  };

  return (
    <Container>
      <Section>
        <SectionName movieSection={movieSection}>{sectionName}</SectionName>
        {!movieSection && <AllCharacters>Ver tudo</AllCharacters>}
      </Section>

      <CharacterRow>
        <CharacterItem />
        <CharacterItem />
        <CharacterItem />
      </CharacterRow>
    </Container>
  );
};

export default Characters;
