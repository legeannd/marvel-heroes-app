import React from 'react';
import { Container, HeaderIcon } from './styles';

import MarvelLogo from '../../../assets/icons/MarvelLogo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <MarvelLogo width={71} height={26} />
    </Container>
  );
};

export default Header;
