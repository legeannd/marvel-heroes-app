import React from 'react';
import { Container, Button } from './styles';

import MarvelLogo from '../../../assets/icons/MarvelLogo.svg';
import Menu from '../../../assets/icons/Menu.svg';
import Search from '../../../assets/icons/Search.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Button>
        <Menu width={24} height={24} />
      </Button>
      <MarvelLogo width={71} height={26} />
      <Button>
        <Search width={24} height={24} />
      </Button>
    </Container>
  );
};

export default Header;
