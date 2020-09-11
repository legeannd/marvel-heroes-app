import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Wrapper, Container, Subtitle, Title } from './styles';
import Header from '../../components/Header';
import HomeButtons from '../../components/HomeButtons';
import Characters from '../../components/Characters';

import {
  heroes,
  villains,
  antiheroes,
  aliens,
  humans,
} from '../../assets/data';

interface Item {
  key: string;
  render: () => JSX.Element;
}

const Home: React.FC = () => {
  const { data } = useMemo(() => {
    const items: Item[] = [
      {
        key: 'C1',
        render: () => <Subtitle>Bem vindo ao Marvel Heroes</Subtitle>,
      },
      {
        key: 'C2',
        render: () => (
          <Title>
            Escolha o seu
            {'\n'}
            personagem
          </Title>
        ),
      },
      {
        key: 'C3',
        render: () => <HomeButtons />,
      },
      {
        key: 'C4',
        render: () => <Characters sectionName="Heróis" sectionData={heroes} />,
      },
      {
        key: 'C5',
        render: () => (
          <Characters sectionName="Vilões" sectionData={villains} />
        ),
      },
      {
        key: 'C6',
        render: () => (
          <Characters sectionName="Anti-heróis" sectionData={antiheroes} />
        ),
      },
      {
        key: 'C7',
        render: () => (
          <Characters sectionName="Alienígenas" sectionData={aliens} />
        ),
      },
      {
        key: 'C8',
        render: () => <Characters sectionName="Humanos" sectionData={humans} />,
      },
    ];

    return {
      data: items,
    };
  }, []);

  return (
    <Wrapper>
      <StatusBar style="dark" />

      <Header />
      <Container>
        <FlatList<Item>
          data={data}
          renderItem={({ item }) => item.render()}
          keyExtractor={item => item.key}
          stickyHeaderIndices={[2]}
          onRefresh={() => {}}
          refreshing={false}
        />
      </Container>
    </Wrapper>
  );
};

export default Home;
