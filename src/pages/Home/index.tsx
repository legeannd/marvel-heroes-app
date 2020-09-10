import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import { Wrapper, Container, Subtitle, Title } from './styles';
import Header from '../../components/Header';
import HomeButtons from '../../components/HomeButtons';
import Characters from '../../components/Characters';

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
        render: () => <Characters name="Heróis" />,
      },
      {
        key: 'C5',
        render: () => <Characters name="Vilões" />,
      },
      {
        key: 'C6',
        render: () => <Characters name="Anti-heróis" />,
      },
      {
        key: 'C7',
        render: () => <Characters name="Alienígenas" />,
      },
      {
        key: 'C8',
        render: () => <Characters name="Humanos" />,
      },
    ];

    return {
      data: items,
    };
  }, []);

  return (
    <Wrapper>
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
